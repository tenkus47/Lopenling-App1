// @flow
import { Document, Paragraph, Packer } from "docx";
import type { TextExporter } from "./TextExporter";
import AnnotatedText from "./AnnotatedText";
import lengthSplitterFactory from "lib/text_splitters/lengthSplitter";

const TIBETAN_FONT = "Microsoft Himalaya";
const HEADING = "TibetanHeading";
const TEXT = "TibetanText";

class DocxExporter implements TextExporter {
    export(text: AnnotatedText, filename: string): Promise<Blob> {
        const doc = new Document();

        this.generateStyles(doc);

        const title = doc.createParagraph(text.textInfo.name).style(HEADING);

        const content = text.getText();
        const splitter = lengthSplitterFactory(1000, /^།[\s]+(?!།[\s]+)/, 2, 5);
        const positions = splitter(content);

        let startPos = 0;
        while (positions.length > 0) {
            const pos = positions.shift();
            const paraContent = content.substring(startPos, pos);
            const para = new Paragraph(paraContent).style(TEXT);
            doc.addParagraph(para);
            startPos = pos;
        }

        const packer = new Packer();

        return new Promise(resolve => {
            packer.toBlob(doc).then(blob => {
                resolve(blob);
            });
        });
    }

    generateStyles(doc: Document) {
        doc.Styles.createParagraphStyle(HEADING, HEADING)
            .basedOn("Normal")
            .size(28)
            .font(TIBETAN_FONT)
            .spacing({
                after: 120
            });

        doc.Styles.createParagraphStyle(TEXT, TEXT)
            .basedOn("Normal")
            .size(18)
            .font(TIBETAN_FONT);
    }
}

export default DocxExporter;
