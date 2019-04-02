import React from "react";
import ReactDOM from "react-dom";
import {IntlProvider, addLocaleData} from 'react-intl';
import esLocaleData from 'react-intl/locale-data/es';
import localeEnMessages from './locales/en';
import localeEsMessages from "./locales/es";
import JobsList from "./components/jobsList";

addLocaleData(esLocaleData);



function langSelector(){
   if (window.navigator.language==="en-US") {
        return (localeEnMessages);
   }else{
        return localeEsMessages;
   }

}

ReactDOM.render(
	<IntlProvider locale={window.navigator.language} messages= {langSelector()}>
		<JobsList/>
	</IntlProvider>, document.getElementById("root")
);