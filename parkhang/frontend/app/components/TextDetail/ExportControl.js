import React from "react";
import Button from "components/UI/Button";

type Props = {
    onClick?: () => void
};

class ExportControl extends React.Component<Props> {
    render() {
        return (
            <div>
                <Button title="Export" onClick={this.props.onClick} />
            </div>
        );
    }
}

export default ExportControl;
