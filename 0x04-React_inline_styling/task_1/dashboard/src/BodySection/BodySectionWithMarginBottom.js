import React from "react";
import PropTypes from "prop-types";
import BodySection from "./BodySection";
import { css, StyleSheet } from "aphrodite";

const styles = StyleSheet.create({
        margin: {
                marginBottom: '20px',
        }
});

class BodySectionWithMarginBottom extends React.Component {
        constructor(props) {
                super(props);
        }
        render() {
                return (
                        <div className={css(styles.margin)}>
                        <BodySection {...this.props}/>
                        </div>
                );
        }
}

BodySection.propTypes = {
        title: PropTypes.string
}
BodySection.defaultProps = {
        title: ''
}

export default BodySectionWithMarginBottom;
