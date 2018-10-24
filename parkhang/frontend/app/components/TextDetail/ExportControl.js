import React from "react";
import Button from "components/UI/Button";
import ExportIcon from "images/export.svg";

type Props = {
    onClick?: () => void
};

class ExportControl extends React.Component<Props> {
    render() {
        return (
            <div>
                <Button
                    icon={<ExportIcon style={{ fill: "#fff" }} width={15} height={15} />}
                    title="Export"
                    onClick={this.props.onClick}
                />
            </div>
        );
    }
}

export default ExportControl;
