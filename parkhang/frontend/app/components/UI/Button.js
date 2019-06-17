import React from "react";
import classnames from "classnames";
import colours from "css/colour.css";
import styles from "./Button.css";
import Accessory from "./Accessory";

export type Alignment = "left" | "center" | "right";

type Props = {
    colour?: string,
    icon?: any,
    title: string,
    align?: Alignment,
    isActive?: boolean,
    accessoryType?: AccessoryType,
    onClick?: () => void,
    noBezel?: boolean,
    disabled?: boolean
};

export default class Button extends React.Component<Props> {
    render() {
        let bgColour = this.props.colour || colours.mainTint;
        let classNames = this.props.noBezel
            ? [styles.buttonNoBezel]
            : [styles.button];

        if (this.props.isActive) classNames.push(styles.active);
        const className = classnames(...classNames);

        let style = {
            backgroundColor: bgColour
        };
        if (this.props.align) style.textAlign = this.props.align;

        return (
            <button
                style={style}
                className={className}
                onClick={this.props.onClick}
                disabled={this.props.disabled}
            >
                {this.props.icon && (
                    <div className={styles.icon}>{this.props.icon}</div>
                )}
                <span className={styles.title}>{this.props.title}</span>
                {this.props.accessoryType && (
                    <Accessory type={this.props.accessoryType} />
                )}
            </button>
        );
    }
}
