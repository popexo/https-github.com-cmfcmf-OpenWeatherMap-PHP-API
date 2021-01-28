(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{69:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return b})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return o}));var n=a(2),r=a(6),l=(a(0),a(72)),i={title:"Current Weather API",sidebar_label:"Current Weather"},b={unversionedId:"apis/current-weather",id:"apis/current-weather",isDocsHomePage:!1,title:"Current Weather API",description:"This API allows you to retrieve the current weather data.",source:"@site/docs/apis/current-weather.md",slug:"/apis/current-weather",permalink:"/OpenWeatherMap-PHP-API/docs/apis/current-weather",editUrl:"https://github.com/cmfcmf/OpenWeatherMap-PHP-API/edit/master/docs/docs/apis/current-weather.md",version:"current",lastUpdatedBy:"Christian Flach",lastUpdatedAt:1580329038,sidebar_label:"Current Weather",sidebar:"someSidebar",previous:{title:"Usage",permalink:"/OpenWeatherMap-PHP-API/docs/usage"},next:{title:"Weather Forecast API",permalink:"/OpenWeatherMap-PHP-API/docs/apis/weather-forecast"}},c=[{value:"<code>$query</code> parameter",id:"query-parameter",children:[{value:"by city name",id:"by-city-name",children:[]},{value:"by city id",id:"by-city-id",children:[]},{value:"by zip code",id:"by-zip-code",children:[]},{value:"by coordinates",id:"by-coordinates",children:[]}]},{value:"<code>$weather</code> object",id:"weather-object",children:[]},{value:"Retrieving raw data",id:"retrieving-raw-data",children:[{value:"HTML",id:"html",children:[]},{value:"JSON",id:"json",children:[]},{value:"XML",id:"xml",children:[]}]}],d={rightToc:c};function o(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"This API allows you to retrieve the current weather data."),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://openweathermap.org/current"}),"Corresponding OpenWeatherMap Documentation"))),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"$owm->getWeather()")," method takes the following parameters:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"$query")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"mixed")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"--"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"See below")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"$units")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},'"imperial"'),"|",Object(l.b)("inlineCode",{parentName:"td"},'"metric"')),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},'"imperial"')),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Units to use")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"$lang")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"string")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"en")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"One of the languages listed at the very bottom of ",Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"https://openweathermap.org/current#multi"}),"the official documentation"))))),Object(l.b)("h2",{id:"query-parameter"},Object(l.b)("inlineCode",{parentName:"h2"},"$query")," parameter"),Object(l.b)("p",null,"The first parameter determines the location to get weather data from.\nSeveral possible approaches are possible:"),Object(l.b)("h3",{id:"by-city-name"},"by city name"),Object(l.b)("p",null,"Specifying the country is optional."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"$weather = $owm->getWeather('Berlin,DE', $units, $lang);\n")),Object(l.b)("h3",{id:"by-city-id"},"by city id"),Object(l.b)("p",null,"One city id:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"$weather = $owm->getWeather(2172797, $units, $lang);\n")),Object(l.b)("p",null,"Multiple city ids"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"// WARNING: This uses a different method (getWeatherGroup) compared\n// to the other query formats (getWeather)!\n$weathers = $owm->getWeatherGroup([2172797, 2172798], $units, $lang);\nforeach ($weathers as $weather) {\n  // Do something\n}\n")),Object(l.b)("h3",{id:"by-zip-code"},"by zip code"),Object(l.b)("p",null,"Specifying the country is optional."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"// Hyderabad, India\n$weather = $owm->getWeather('zip:500001,IN', $units, $lang);\n")),Object(l.b)("h3",{id:"by-coordinates"},"by coordinates"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"$weather = $owm->getWeather(['lat' => 77.73038, 'lon' => 41.89604],\n                            $units, $lang);\n")),Object(l.b)("h2",{id:"weather-object"},Object(l.b)("inlineCode",{parentName:"h2"},"$weather")," object"),Object(l.b)("p",null,"The returned object is an instance of ",Object(l.b)("inlineCode",{parentName:"p"},"Cmfcmf\\OpenWeatherMap\\CurrentWeather"),".\nIt provides the following data:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"lastUpdate")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"\\\u1e10ateTimeInterface")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"When the data was last updated")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"temperature->now")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"Unit")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Note: This should be named ",Object(l.b)("inlineCode",{parentName:"td"},"temperature->avg")," and is only named ",Object(l.b)("inlineCode",{parentName:"td"},"temperature->now")," for backwards compatibility! Returns the average current temperature for the given location (i.e, a big city might have multiple temperature measurement stations)")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"temperature->min")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"Unit")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Minimum current temperature for the given locaiton")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"temperature->max")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"Unit")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Maximum current temperature for the given locaiton")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"pressure")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"Unit")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Air pressure")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"humidity")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"Unit")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Humidity")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"sun->rise")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"\\DateTimeInterface")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Time of sunrise")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"sun->set")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"\\DateTimeInterface")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Time of sunset")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"wind->speed")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"Unit")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Wind speed")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"wind->direction")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"Unit")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Wind direction")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"clouds")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"Unit")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Cloudiness in percent")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"precipitation")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"Unit")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Recent precipitation")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"weather->id")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"int")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Current weather phenomenon id")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"weather->description")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"string")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Current weather description")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"weather->icon")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"string")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Current weather icon name. Use ",Object(l.b)("inlineCode",{parentName:"td"},"weather->getIconUrl()")," to get the url to an icon from OpenWeatherMap")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"city->id")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"int")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Internal city id")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"city->name")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"string")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Name of the city")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"city->country")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"string")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"City country code")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"city->timezone")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"\\DateTimeZone"),"|",Object(l.b)("inlineCode",{parentName:"td"},"null")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"City timezone")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"city->lon")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"float")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"City longitude")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"city->lat")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"float")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"City latitude")))),Object(l.b)("h2",{id:"retrieving-raw-data"},"Retrieving raw data"),Object(l.b)("h3",{id:"html"},"HTML"),Object(l.b)("p",null,"You can also request the data as an HTML page:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"$html = $owm->getRawWeatherData('Berlin', $units, $lang, null, 'html');\n")),Object(l.b)("p",null,"Result:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),'<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="utf-8">\n  <meta name="keywords" content="weather, world, openweathermap, weather, layer" />\n  <meta name="description" content="A layer with current weather conditions in cities for world wide" />\n  <meta name="domain" content="openweathermap.org" />\n  <meta http-equiv="pragma" content="no-cache" />\n  <meta http-equiv="Expires" content="-1" />\n</head>\n<body>\n  <div style="font-size: medium; font-weight: bold; margin-bottom: 0px;">Berlin</div>\n  <div style="float: left; width: 130px;">\n    <div style="display: block; clear: left;">\n      <div style="float: left;" title="Titel">\n        <img height="45" width="45" style="border: medium none; width: 45px; height: 45px; background: url(&quot;http://openweathermap.org/img/w/04d.png&quot;) repeat scroll 0% 0% transparent;" alt="title" src="http://openweathermap.org/images/transparent.png"/>\n      </div>\n      <div style="float: left;">\n        <div style="display: block; clear: left; font-size: medium; font-weight: bold; padding: 0pt 3pt;" title="Current Temperature">12.73\xb0C</div>\n        <div style="display: block; width: 85px; overflow: visible;"></div>\n      </div>\n    </div>\n    <div style="display: block; clear: left; font-size: small;">Clouds: 89%</div>\n    <div style="display: block; clear: left; color: gray; font-size: x-small;" >Humidity: 62%</div>\n    <div style="display: block; clear: left; color: gray; font-size: x-small;" >Wind: 6.2 m/s</div>\n    <div style="display: block; clear: left; color: gray; font-size: x-small;" >Pressure: 1014hpa</div>\n  </div>\n  <div style="display: block; clear: left; color: gray; font-size: x-small;">\n    <a href="http://openweathermap.org/city/2950159?utm_source=openweathermap&utm_medium=widget&utm_campaign=html_old" target="_blank">More..</a>\n  </div>\n  <script>(function(i,s,o,g,r,a,m){i[\'GoogleAnalyticsObject\']=r;i[r]=i[r]||function(){\n(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\nm=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\n})(window,document,\'script\',\'//www.google-analytics.com/analytics.js\',\'ga\');ga(\'create\', \'UA-31601618-9\', \'auto\');ga(\'send\', \'pageview\');<\/script>\n</body>\n</html>\n')),Object(l.b)("h3",{id:"json"},"JSON"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"$json = $owm->getRawWeatherData('Berlin', 'metric', 'de', null, 'json');\n")),Object(l.b)("p",null,"Result:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "coord":{"lon":13.41,"lat":52.52},\n  "weather":[{"id":804,"main":"Clouds","description":"Bedeckt","icon":"04d"}],\n  "base":"stations",\n  "main":{"temp":12.73,"feels_like":7.4,"temp_min":11.67,\n          "temp_max":13.89,"pressure":1014,"humidity":62},\n  "visibility":10000,\n  "wind":{"speed":6.2,"deg":200},\n  "clouds":{"all":89},\n  "dt":1579089181,\n  "sys":{"type":1,"id":1275,"country":"DE","sunrise":1579072219,"sunset":1579101619},\n  "timezone":3600,\n  "id":2950159,\n  "name":"Berlin",\n  "cod":200\n}\n')),Object(l.b)("h3",{id:"xml"},"XML"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"$xml = $owm->getRawWeatherData('Berlin', 'metric', 'de', null, 'xml');\n")),Object(l.b)("p",null,"Result:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-xml"}),'<?xml version="1.0" encoding="UTF-8"?>\n<current><city id="2950159" name="Berlin"><coord lon="13.41" lat="52.52"></coord><country>DE</country><timezone>3600</timezone><sun rise="2020-01-15T07:10:19" set="2020-01-15T15:20:19"></sun></city><temperature value="12.73" min="11.67" max="13.89" unit="celsius"></temperature><feels_like value="7.4" unit="celsius"></feels_like><humidity value="62" unit="%"></humidity><pressure value="1014" unit="hPa"></pressure><wind><speed value="6.2" unit="m/s" name="Moderate breeze"></speed><gusts></gusts><direction value="200" code="SSW" name="South-southwest"></direction></wind><clouds value="89" name="Bedeckt"></clouds><visibility value="10000"></visibility><precipitation mode="no"></precipitation><weather number="804" value="Bedeckt" icon="04d"></weather><lastupdate value="2020-01-15T11:53:01"></lastupdate></current>\n')))}o.isMDXComponent=!0},72:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return O}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=r.a.createContext({}),o=function(e){var t=r.a.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):b(b({},t),e)),a},p=function(e){var t=o(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=o(a),u=n,O=p["".concat(i,".").concat(u)]||p[u]||m[u]||l;return a?r.a.createElement(O,b(b({ref:t},d),{},{components:a})):r.a.createElement(O,b({ref:t},d))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=u;var b={};for(var c in t)hasOwnProperty.call(t,c)&&(b[c]=t[c]);b.originalType=e,b.mdxType="string"==typeof e?e:n,i[1]=b;for(var d=2;d<l;d++)i[d]=a[d];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);