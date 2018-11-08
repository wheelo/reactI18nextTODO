import { withNamespaces } from "react-i18next";
import i18n from "i18next";
import React, { Component } from "react";

class Footer extends Component {
  state = {
    currentLanguage: "en"
  };

  handleChange = e => {
    i18n.changeLanguage(e.target.value);
    this.setState({ currentLanguage: e.target.value });
  };

  render() {
    const { t } = this.props;
    const languages = {
      en: t("language_en"),
      fr: t("language_fr"),
      de: t("language_de"),
      ja: t("language_ja")
    };

    // 获取
    return (
      <div>
        <label htmlFor="language-picker">{t("current_language")}: </label>
        <select
          id="language-picker"
          onChange={this.handleChange}
          value={this.state.currentLanguage}
        >
          <option value="" disabled hidden>
            {t("choose_language")}
          </option>
          {Object.keys(languages).map(languageKey => (
            <option value={languageKey} key={languageKey}>
              {languages[languageKey]}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

export default withNamespaces("translation")(Footer);
