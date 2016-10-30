if (typeof JSON !== 'object') {
	JSON = {};
}
(function() {
	'use strict';
	function f(n) {
		return n < 10 ? '0' + n : n;
	}
	if (typeof Date.prototype.toJSON !== 'function') {
		Date.prototype.toJSON = function() {
			return isFinite(this.valueOf()) ? this.getUTCFullYear() + '-'
					+ f(this.getUTCMonth() + 1) + '-' + f(this.getUTCDate())
					+ 'T' + f(this.getUTCHours()) + ':'
					+ f(this.getUTCMinutes()) + ':' + f(this.getUTCSeconds())
					+ 'Z' : null;
		};
		String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function() {
			return this.valueOf();
		};
	}
	var cx, escapable, gap, indent, meta, rep;
	function quote(string) {
		escapable.lastIndex = 0;
		return escapable.test(string) ? '"'
				+ string.replace(escapable,
						function(a) {
							var c = meta[a];
							return typeof c === 'string' ? c : '\\u'
									+ ('0000' + a.charCodeAt(0).toString(16))
											.slice(-4);
						}) + '"' : '"' + string + '"';
	}
	function str(key, holder) {
		var i, k, v,
		length, mind = gap, partial, value = holder[key];
		if (value && typeof value === 'object'
				&& typeof value.toJSON === 'function') {
			value = value.toJSON(key);
		}
		if (typeof rep === 'function') {
			value = rep.call(holder, key, value);
		}
		switch (typeof value) {
		case 'string':
			return quote(value);
		case 'number':
			return isFinite(value) ? String(value) : 'null';
		case 'boolean':
		case 'null':
			return String(value);
		case 'object':
			if (!value) {
				return 'null';
			}
			gap += indent;
			partial = [];
			if (Object.prototype.toString.apply(value) === '[object Array]') {
				length = value.length;
				for (i = 0; i < length; i += 1) {
					partial[i] = str(i, value) || 'null';
				}
				v = partial.length === 0 ? '[]' : gap ? '[\n' + gap
						+ partial.join(',\n' + gap) + '\n' + mind + ']' : '['
						+ partial.join(',') + ']';
				gap = mind;
				return v;
			}
			if (rep && typeof rep === 'object') {
				length = rep.length;
				for (i = 0; i < length; i += 1) {
					if (typeof rep[i] === 'string') {
						k = rep[i];
						v = str(k, value);
						if (v) {
							partial.push(quote(k) + (gap ? ': ' : ':') + v);
						}
					}
				}
			} else {
				for (k in value) {
					if (Object.prototype.hasOwnProperty.call(value, k)) {
						v = str(k, value);
						if (v) {
							partial.push(quote(k) + (gap ? ': ' : ':') + v);
						}
					}
				}
			}
			v = partial.length === 0 ? '{}' : gap ? '{\n' + gap
					+ partial.join(',\n' + gap) + '\n' + mind + '}' : '{'
					+ partial.join(',') + '}';
			gap = mind;
			return v;
		}
	}
	if (typeof JSON.stringify !== 'function') {
		escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
		meta = {
			'\b' : '\\b',
			'\t' : '\\t',
			'\n' : '\\n',
			'\f' : '\\f',
			'\r' : '\\r',
			'"' : '\\"',
			'\\' : '\\\\'
		};
		JSON.stringify = function(value, replacer, space) {
			var i;
			gap = '';
			indent = '';
			if (typeof space === 'number') {
				for (i = 0; i < space; i += 1) {
					indent += ' ';
				}
			} else if (typeof space === 'string') {
				indent = space;
			}
			rep = replacer;
			if (replacer
					&& typeof replacer !== 'function'
					&& (typeof replacer !== 'object' || typeof replacer.length !== 'number')) {
				throw new Error('JSON.stringify');
			}
			return str('', {
				'' : value
			});
		};
	}
	if (typeof JSON.parse !== 'function') {
		cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
		JSON.parse = function(text, reviver) {
			var j;
			function walk(holder, key) {
				var k, v, value = holder[key];
				if (value && typeof value === 'object') {
					for (k in value) {
						if (Object.prototype.hasOwnProperty.call(value, k)) {
							v = walk(value, k);
							if (v !== undefined) {
								value[k] = v;
							} else {
								delete value[k];
							}
						}
					}
				}
				return reviver.call(holder, key, value);
			}
			text = String(text);
			cx.lastIndex = 0;
			if (cx.test(text)) {
				text = text.replace(cx,
						function(a) {
							return '\\u'
									+ ('0000' + a.charCodeAt(0).toString(16))
											.slice(-4);
						});
			}
			if (/^[\],:{}\s]*$/
					.test(text
							.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@')
							.replace(
									/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
									']').replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {
				j = eval('(' + text + ')');
				return typeof reviver === 'function' ? walk({
					'' : j
				}, '') : j;
			}
			throw new SyntaxError('JSON.parse');
		};
	}
}());

function newGuid() {
	var guid = "";
	for (var i = 1; i <= 32; i++) {
		guid += Math.floor(Math.random() * 16.0).toString(16);
		if ((i == 8) || (i == 12) || (i == 16) || (i == 20)) {
			guid += "-";
		}
	}
	guid = guid + "-" + Number(new Date().getTime()).toString(16);
	return guid;
}

var _btParams = new Object({

	bpAppCodeName: navigator.appCodeName,
	bpAppName: navigator.appName,
	bpAppVersion: navigator.appVersion,
	bpBrowserLanguage: navigator.browserLanguage,
	bpCookieEnabled: navigator.cookieEnabled,
	bpCpuClass: navigator.cpuClass,
	bpOnLine: navigator.onLine,
	bpPlatform: navigator.platform,
	bpSystemLanguage: navigator.systemLanguage,
	bpUserAgent: navigator.userAgent,
	bpUserLanguage: navigator.userLanguage,

	bpReferrer: encodeURI(document.referrer),
	bpCurrentUrl: encodeURI(document.URL),
	bpDomain: document.domain,
	bpCookie: "",
	bpTitle: document.title,
	bpFilesize: document.filesize,
	bpCharset: document.charset,
	bpFileCreatedDate: document.filecreateddate,
	bpFileModifiedDate: document.filemodifieddate,
	bpLastModified: document.lastModified,

	bpHash: document.location.hash,
	bpHostAndPort: document.location.host,
	bpHostName: document.location.hostname,
	bpHref: encodeURI(document.location.href),
	bpPathName: encodeURI(document.location.pathname),
	bpPort: document.location.port,
	bpProtocol: document.location.protocol,
	bpSearch: document.location.search,

	bpAvailWidth: screen.availWidth,
	bpAvailHeight: screen.availHeight,

	btWebsiteId:'',
	btTokenId : '',
	btTokenTag : '',
	btProfileId : '',
	btFirstCategory : '',
	btSecondCategory : '',
	btThirdCategory : ''
});

var _bbtcookie = new Object({
	addCookie : function(objName, objValue) {
		_bbtcookie.delCookie(objName);
		var str = objName + "=" + escape(objValue);
		var date = new Date();
		var Days = 365;
		date.setTime(date.getTime() + Days * 24 * 60 * 60 * 1000);
		str += ";expires=" + date.toGMTString() + ";domain:.boldseas.com;";
		document.cookie = str;
	},
	delCookie : function(name) {
		document.cookie = name + "=;expires=" + (new Date(0)).toGMTString();
	},
	setCookie : function(objName, objValue) {
		var Days = 365;
		var exp = new Date();
		exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
		document.cookie = objName + "=" + escape(objValue) + ";expires="
				+ exp.toGMTString() + ";domain:.boldseas.com;";
	},
	cookie : function(objName) {
		var arr = document.cookie.match(new RegExp("(^| )" + objName
				+ "=([^;]*)(;|$)"));
		if (arr != null && unescape(arr[2]) != null
				&& unescape(arr[2]) != 'undefined') {
			return unescape(arr[2]);
		}
		return '';
	},
	getCookie : function(objName) {
		var retVar = "";
		var cookies = document.cookie.split("; ");
		for (var i = 0; i < cookies.length; i++) {
			var cookieName = cookies[i].split("=");
			if (cookieName[0] == objName) {
				retVar = unescape(cookieName[1]);
				break;
			}
		}
		if (retVar == null || retVar == 'undefined') {
			retVar = "";
		}
		return retVar;
	},
	isrefresh : function(objName) {
		var objValue = this.cookie(objName);
		return objValue != null && objValue != 'undefined' && objValue == _bbtparams.currentURL;
	},
	__H : function(name, value, expires, domain) {
		var expires = new Date();
		expires.setTime(expires.getTime() + 7 * 24 * 60 * 60 * 1000);
		document.cookie = name + "=" + escape(value)
				+ ((expires) ? ";expires=" + expires.toGMTString() : "")
				+ ((domain) ? ";domain=" + domain : "");
	},
	__I : function(name) {
		var arr = document.cookie.match(new RegExp("(^| )" + name
				+ "=([^;]*)(;|$)"));
		if (arr != null)
			return unescape(arr[2]);
		return null;
	}
});
var _bbtInner = new Object(
		{
			recTokenId : function(btTokenId) {
				if (btTokenId == null || btTokenId == 'undefined') {
					btTokenId = '';
				}

				var btTokenIdOld = _bbtcookie.cookie("BTKR_TNID");
				if (btTokenIdOld != '' && btTokenIdOld != 'undefined') {
					_bbtcookie.setCookie('BTKR_TNID', btTokenId);
				} else {
					_bbtcookie.addCookie('BTKR_TNID', btTokenId);
				}
			},
			recProfileId : function(btProfileId) {
				if (btProfileId == null || btProfileId == 'undefined') {
					btProfileId = '';
				}

				var btProfileIdOld = _bbtcookie.cookie("BTKR_PEID");
				if (btProfileIdOld != '' && btProfileIdOld != 'undefined') {
					_bbtcookie.setCookie('BTKR_PEID', btProfileId);
				} else {
					_bbtcookie.addCookie('BTKR_PEID', btProfileId);
				}
			},
			recTokenTag : function(btTokenTag) {
				_btParams.btTokenTag = btTokenTag;
			},
			loadTokenTag : function(){
				var params = window.location.search ;
				var k = -1 ;
				if(params.indexOf("?")==0){
					for ( var p in dspParamsArray) {
						if(params.indexOf(dspParamsArray[p]) > 0){
							k = p ;
							break;
						}
					}
				}
				if(k>=0){
					_btracker.recTokenTag(dspParamsArray[k]);
					_bbtcookie.setCookie('tokenTag',dspParamsArray[k]);
				}
				_btParams.btTokenTag = _bbtcookie.getCookie('tokenTag');
			},
			recLand : function(btIsReg){
				_bbtcookie.setCookie('tokenId',_bbtcookie.cookie("BTKR_TNID"));
				var params = window.location.search ;
				var isSend = false;
				if(params.indexOf("?")==0){
					for ( var p in dspParamsArray) {
						if(params.indexOf(dspParamsArray[p]) > 0 && _bbtcookie.cookie("BTKR_TNID")!=="" && _bbtcookie.cookie("BTKR_TNID")!=="undefined"){
							$.ajax({
								url:'http://btracker.cjddealer.com.cn/btracker/images/land.png',
								dataType: "jsonp",
								jsonp: "callback",
								cache:false,
								async : true,
								data : {
									'tokenTag':_bbtcookie.cookie("tokenTag") ,
									'toe':_bbtcookie.cookie("BTKR_TNID"),
									'websiteId':_bbtcookie.cookie("BTKR_WSID"),
									'params':params,
									'time':new Date().getTime()
								},
								success : function(data) {
									_bbtcookie.setCookie('interactId',data.R);
								}
							});
							isSend = true;
							break;
						}
					}
				}
				if('reg'==btIsReg){
					$.ajax({
						url:'http://btracker.cjddealer.com.cn/btracker/images/reg.png',
						dataType: "jsonp",
						jsonp: "callback",
						cache:false,
						async : true,
						data : {
							'toe':_bbtcookie.cookie("BTKR_TNID"),
							'tokenTag':_bbtcookie.cookie("tokenTag"),
							'websiteId':_bbtcookie.cookie("BTKR_WSID"),
							'domain':_btParams.bpDomain,
							'profileid':_bbtcookie.cookie("BTKR_PEID"),
							'time':new Date().getTime()
						},
						success : function(data) {
						}
					});
				}
			},
			recCategory : function(btFirstCategory, btSecondCategory,
					btThirdCategory) {
				_btParams.btFirstCategory = btFirstCategory;
				_btParams.btSecondCategory = btSecondCategory;
				_btParams.btThirdCategory = btThirdCategory;
			},
			recWebsiteId : function(btWebsiteId){
				_btParams.btWebsiteId = btWebsiteId;
				_bbtcookie.setCookie('BTKR_WSID',btWebsiteId);
			},
			trackPage : function() {
				var btTokenId = _bbtcookie.cookie("BTKR_TNID");
				_btParams.btTokenId = btTokenId;
				_btParams.btProfileId = _bbtcookie.cookie("BTKR_PEID");
				var btSeedId = _bbtcookie.cookie('BTKR_SDID');
				if (btSeedId == null || btSeedId == ''
						|| btSeedId == 'undefined') {
					if (btTokenId == null || btTokenId == '' || btTokenId == 'undefined') {
						var tokenId = newGuid();
						_btParams.btTokenId = tokenId;
						_bbtInner.recTokenId(tokenId);
					}
				}

				var params = JSON.stringify(_btParams);
				params = encodeURI(params);
				params = encodeURI(params);
				var urls = [];

				(function() {
					setTimeout(
							function() {
								$.ajax({  
                   						url:'http://btracker.cjddealer.com.cn/btracker/images/bbtrack.png',
										dataType: "jsonp",
										jsonp: "callback",
										cache:false,
		                                async:true,  
		                                data:{'q':params},
									success: function (data) {
									}
								});

								if ("http:" == document['location'].protocol) {
									for (var ui = 0; urls != null
									&& urls.length > 0
									&& ui < urls.length; ui++) {
										var iot = new Image(1, 1);
										iot.src = urls[ui];
										iot.onload = function () {
											iot.onload = null;
										};
									}
									_bbtcookie.setCookie('BTKR_SDID', 1);
								}
							}, 10);
				})();
			}
		});

function BTracker() {
}
BTracker.prototype.recProfileId = function(profileId) {
	_bbtInner.recProfileId(profileId);
};
BTracker.prototype.recTokenId = function() {
	var tokenId = newGuid();
	_bbtInner.recTokenId(tokenId);
};
BTracker.prototype.recTokenTag = function(tokenTag) {
	_bbtInner.recTokenTag(tokenTag);
};
BTracker.prototype.recCategory = function(btFirstCategory, btSecondCategory,
		btThirdCategory) {
	_bbtInner.recCategory(btFirstCategory, btSecondCategory, btThirdCategory);
};
BTracker.prototype.trackPage = function(btIsReg) {
	_bbtInner.loadTokenTag();
	_bbtInner.recLand(btIsReg);
	_bbtInner.trackPage();
};
BTracker.prototype.recWebsiteId = function(btWebsiteId){
	_bbtInner.recWebsiteId(btWebsiteId);
};
var _btracker = new BTracker();

var dspParamsArray = [];