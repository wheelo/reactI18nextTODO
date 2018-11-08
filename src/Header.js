import { withNamespaces } from "react-i18next";
import React, { Component } from "react";

class Header extends Component {
  state = {
    text: ""
  };

  handleChange = e => {
    this.setState({ text: e.target.value });
  };

  render() {
    const { t } = this.props;
    const { text } = this.state;

    return (
      <header className="header">
        <h1>{t("app_title")}</h1>
        <input
          type="text"
          placeholder={t("input_placeholder")}
          autoFocus={true}
          value={this.state.text}
          onChange={this.handleChange}
        />
      </header>
    );
  }
}

export default withNamespaces("translation")(Header);
