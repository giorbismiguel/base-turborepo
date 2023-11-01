import React, {FC, memo} from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import {Link} from "@mui/material";
import {useTranslation} from "react-i18next";
import classNames from "classnames";
import {LanguageSelectorProps} from "./LanguageSelector.types";

const LanguageSelector: FC<LanguageSelectorProps> = ({component=Link, className, icon, mini, compProps}) => {
  const {t, i18n} = useTranslation("locales");
  const locale = i18n?.language;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const {className: componentClass, ...props} = compProps || {};

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const changeLanguageHandler = (lng: string) => {
    i18n.changeLanguage(lng);
    handleClose();
  };

  const Component = component;

  return (
    <div className={className}>
      <Component
        id="language-selector"
        aria-controls={open ? "language-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        className={classNames("cursor-pointer", componentClass)}
        {...props}
      >
        {icon} {t(mini ? `mini-${locale}` : locale)}
      </Component>
      <Menu
        id="language-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "language-selector",
        }}
      >
        <MenuItem
          onClick={() => changeLanguageHandler("en")}
          key={"en"}
          selected={locale === "en"}
        >
          <>
            {t("en")}
          </>
        </MenuItem>
        <MenuItem
          onClick={() => changeLanguageHandler("es")}
          key={"es"}
          selected={locale === "es"}
        >
          <>
            {t("es")}
          </>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default memo(LanguageSelector);
