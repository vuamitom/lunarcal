/**
 * Copyright 2004 Ho Ngoc Duc [http://come.to/duc]. All Rights Reserved.<p>
 * Permission to use, copy, modify, and redistribute this software and its
 * documentation for personal, non-commercial use is hereby granted provided that
 * this copyright notice appears in all copies.
 */

var ABOUT = "\u00C2m l\u1ECBch Vi\u1EC7t Nam - Version 0.8"+"\n\u00A9 2004 H\u1ED3 Ng\u1ECDc \u0110\u1EE9c [http://come.to/duc]";
var TK19 = new Array(
	0x30baa3, 0x56ab50, 0x422ba0, 0x2cab61, 0x52a370, 0x3c51e8, 0x60d160, 0x4ae4b0, 0x376926, 0x58daa0,
	0x445b50, 0x3116d2, 0x562ae0, 0x3ea2e0, 0x28e2d2, 0x4ec950, 0x38d556, 0x5cb520, 0x46b690, 0x325da4,
	0x5855d0, 0x4225d0, 0x2ca5b3, 0x52a2b0, 0x3da8b7, 0x60a950, 0x4ab4a0, 0x35b2a5, 0x5aad50, 0x4455b0,
	0x302b74, 0x562570, 0x4052f9, 0x6452b0, 0x4e6950, 0x386d56, 0x5e5aa0, 0x46ab50, 0x3256d4, 0x584ae0,
	0x42a570, 0x2d4553, 0x50d2a0, 0x3be8a7, 0x60d550, 0x4a5aa0, 0x34ada5, 0x5a95d0, 0x464ae0, 0x2eaab4,
	0x54a4d0, 0x3ed2b8, 0x64b290, 0x4cb550, 0x385757, 0x5e2da0, 0x4895d0, 0x324d75, 0x5849b0, 0x42a4b0,
	0x2da4b3, 0x506a90, 0x3aad98, 0x606b50, 0x4c2b60, 0x359365, 0x5a9370, 0x464970, 0x306964, 0x52e4a0,
	0x3cea6a, 0x62da90, 0x4e5ad0, 0x392ad6, 0x5e2ae0, 0x4892e0, 0x32cad5, 0x56c950, 0x40d4a0, 0x2bd4a3,
	0x50b690, 0x3a57a7, 0x6055b0, 0x4c25d0, 0x3695b5, 0x5a92b0, 0x44a950, 0x2ed954, 0x54b4a0, 0x3cb550,
	0x286b52, 0x4e55b0, 0x3a2776, 0x5e2570, 0x4852b0, 0x32aaa5, 0x56e950, 0x406aa0, 0x2abaa3, 0x50ab50
); /* Years 2000-2099 */

var TK20 = new Array(
	0x3c4bd8, 0x624ae0, 0x4ca570, 0x3854d5, 0x5cd260, 0x44d950, 0x315554, 0x5656a0, 0x409ad0, 0x2a55d2,
	0x504ae0, 0x3aa5b6, 0x60a4d0, 0x48d250, 0x33d255, 0x58b540, 0x42d6a0, 0x2cada2, 0x5295b0, 0x3f4977,
	0x644970, 0x4ca4b0, 0x36b4b5, 0x5c6a50, 0x466d50, 0x312b54, 0x562b60, 0x409570, 0x2c52f2, 0x504970,
	0x3a6566, 0x5ed4a0, 0x48ea50, 0x336a95, 0x585ad0, 0x442b60, 0x2f86e3, 0x5292e0, 0x3dc8d7, 0x62c950,
	0x4cd4a0, 0x35d8a6, 0x5ab550, 0x4656a0, 0x31a5b4, 0x5625d0, 0x4092d0, 0x2ad2b2, 0x50a950, 0x38b557,
	0x5e6ca0, 0x48b550, 0x355355, 0x584da0, 0x42a5b0, 0x2f4573, 0x5452b0, 0x3ca9a8, 0x60e950, 0x4c6aa0,
	0x36aea6, 0x5aab50, 0x464b60, 0x30aae4, 0x56a570, 0x405260, 0x28f263, 0x4ed940, 0x38db47, 0x5cd6a0,
	0x4896d0, 0x344dd5, 0x5a4ad0, 0x42a4d0, 0x2cd4b4, 0x52b250, 0x3cd558, 0x60b540, 0x4ab5a0, 0x3755a6,
	0x5c95b0, 0x4649b0, 0x30a974, 0x56a4b0, 0x40aa50, 0x29aa52, 0x4e6d20, 0x39ad47, 0x5eab60, 0x489370,
	0x344af5, 0x5a4970, 0x4464b0, 0x2c74a3, 0x50ea50, 0x3d6a58, 0x6256a0, 0x4aaad0, 0x3696d5, 0x5c92e0
); /* Years 1900-1999 */

var TK21 = new Array(
	0x46c960, 0x2ed954, 0x54d4a0, 0x3eda50, 0x2a7552, 0x4e56a0, 0x38a7a7, 0x5ea5d0, 0x4a92b0, 0x32aab5,
	0x58a950, 0x42b4a0, 0x2cbaa4, 0x50ad50, 0x3c55d9, 0x624ba0, 0x4ca5b0, 0x375176, 0x5c5270, 0x466930,
	0x307934, 0x546aa0, 0x3ead50, 0x2a5b52, 0x504b60, 0x38a6e6, 0x5ea4e0, 0x48d260, 0x32ea65, 0x56d520,
	0x40daa0, 0x2d56a3, 0x5256d0, 0x3c4afb, 0x6249d0, 0x4ca4d0, 0x37d0b6, 0x5ab250, 0x44b520, 0x2edd25,
	0x54b5a0, 0x3e55d0, 0x2a55b2, 0x5049b0, 0x3aa577, 0x5ea4b0, 0x48aa50, 0x33b255, 0x586d20, 0x40ad60,
	0x2d4b63, 0x525370, 0x3e49e8, 0x60c970, 0x4c54b0, 0x3768a6, 0x5ada50, 0x445aa0, 0x2fa6a4, 0x54aad0,
	0x4052e0, 0x28d2e3, 0x4ec950, 0x38d557, 0x5ed4a0, 0x46d950, 0x325d55, 0x5856a0, 0x42a6d0, 0x2c55d4,
	0x5252b0, 0x3ca9b8, 0x62a930, 0x4ab490, 0x34b6a6, 0x5aad50, 0x4655a0, 0x2eab64, 0x54a570, 0x4052b0,
	0x2ab173, 0x4e6930, 0x386b37, 0x5e6aa0, 0x48ad50, 0x332ad5, 0x582b60, 0x42a570, 0x2e52e4, 0x50d160,
	0x3ae958, 0x60d520, 0x4ada90, 0x355aa6, 0x5a56d0, 0x462ae0, 0x30a9d4, 0x54a2d0, 0x3ed150, 0x28e952
); /* Years 2000-2099 */

var TK22 = new Array(
		0x4eb520, 0x38d727, 0x5eada0, 0x4a55b0, 0x362db5, 0x5a45b0, 0x44a2b0, 0x2eb2b4, 0x54a950, 0x3cb559,
		0x626b20, 0x4cad50, 0x385766, 0x5c5370, 0x484570, 0x326574, 0x5852b0, 0x406950, 0x2a7953, 0x505aa0,
		0x3baaa7, 0x5ea6d0, 0x4a4ae0, 0x35a2e5, 0x5aa550, 0x42d2a0, 0x2de2a4, 0x52d550, 0x3e5abb, 0x6256a0,
		0x4c96d0, 0x3949b6, 0x5e4ab0, 0x46a8d0, 0x30d4b5, 0x56b290, 0x40b550, 0x2a6d52, 0x504da0, 0x3b9567,
		0x609570, 0x4a49b0, 0x34a975, 0x5a64b0, 0x446a90, 0x2cba94, 0x526b50, 0x3e2b60, 0x28ab61, 0x4c9570,
		0x384ae6, 0x5cd160, 0x46e4a0, 0x2eed25, 0x54da90, 0x405b50, 0x2c36d3, 0x502ae0, 0x3a93d7, 0x6092d0,
		0x4ac950, 0x32d556, 0x58b4a0, 0x42b690, 0x2e5d94, 0x5255b0, 0x3e25fa, 0x6425b0, 0x4e92b0, 0x36aab6,
		0x5c6950, 0x4674a0, 0x31b2a5, 0x54ad50, 0x4055a0, 0x2aab73, 0x522570, 0x3a5377, 0x6052b0, 0x4a6950,
		0x346d56, 0x585aa0, 0x42ab50, 0x2e56d4, 0x544ae0, 0x3ca570, 0x2864d2, 0x4cd260, 0x36eaa6, 0x5ad550,
		0x465aa0, 0x30ada5, 0x5695d0, 0x404ad0, 0x2aa9b3, 0x50a4d0, 0x3ad2b7, 0x5eb250, 0x48b540, 0x33d556
); /* Years 2100-2199 */

var CAN = new Array("Gi\341p", "\u1EA4t", "B\355nh", "\u0110inh", "M\u1EADu", "K\u1EF7", "Canh", "T\342n", "Nh\342m", "Qu\375");
var CHI = new Array("T\375", "S\u1EEDu", "D\u1EA7n", "M\343o", "Th\354n", "T\u1EF5", "Ng\u1ECD", "M\371i", "Th\342n", "D\u1EADu", "Tu\u1EA5t", "H\u1EE3i");
var TUAN = new Array("Ch\u1EE7 nh\u1EADt", "Th\u1EE9 hai", "Th\u1EE9 ba", "Th\u1EE9 t\u01B0", "Th\u1EE9 n\u0103m", "Th\u1EE9 s\341u", "Th\u1EE9 b\u1EA3y");
var GIO_HD = new Array("110100101100", "001101001011", "110011010010", "101100110100", "001011001101", "010010110011");
var TIETKHI = new Array("Xu\u00E2n ph\u00E2n", "Thanh minh", "C\u1ED1c v\u0169", "L\u1EADp h\u1EA1", "Ti\u1EC3u m\u00E3n", "Mang ch\u1EE7ng",
	"H\u1EA1 ch\u00ED", "Ti\u1EC3u th\u1EED", "\u0110\u1EA1i th\u1EED", "L\u1EADp thu", "X\u1EED th\u1EED", "B\u1EA1ch l\u1ED9",
	"Thu ph\u00E2n", "H\u00E0n l\u1ED9", "S\u01B0\u01A1ng gi\u00E1ng", "L\u1EADp \u0111\u00F4ng", "Ti\u1EC3u tuy\u1EBFt", "\u0110\u1EA1i tuy\u1EBFt",
	"\u0110\u00F4ng ch\u00ED", "Ti\u1EC3u h\u00E0n", "\u0110\u1EA1i h\u00E0n", "L\u1EADp xu\u00E2n", "V\u0169 Th\u1EE7y", "Kinh tr\u1EADp"
);

/* Create lunar date object, stores (lunar) date, month, year, leap month indicator, and Julian date number */
function LunarDate(dd, mm, yy, leap, jd) {
	this.day = dd;
	this.month = mm;
	this.year = yy;
	this.leap = leap;
	this.jd = jd;
}

var PI = Math.PI;

/* Discard the fractional part of a number, e.g., INT(3.2) = 3 */
function INT(d) {
	return Math.floor(d);
}

function jdn(dd, mm, yy) {
	var a = INT((14 - mm) / 12);
	var y = yy+4800-a;
	var m = mm+12*a-3;
	var jd = dd + INT((153*m+2)/5) + 365*y + INT(y/4) - INT(y/100) + INT(y/400) - 32045;
	return jd;
	//return 367*yy - INT(7*(yy+INT((mm+9)/12))/4) - INT(3*(INT((yy+(mm-9)/7)/100)+1)/4) + INT(275*mm/9)+dd+1721029;
}

function jdn2date(jd) {
	var Z, A, alpha, B, C, D, E, dd, mm, yyyy, F;
	Z = jd;
	if (Z < 2299161) {
	  A = Z;
	} else {
	  alpha = INT((Z-1867216.25)/36524.25);
	  A = Z + 1 + alpha - INT(alpha/4);
	}
	B = A + 1524;
	C = INT( (B-122.1)/365.25);
	D = INT( 365.25*C );
	E = INT( (B-D)/30.6001 );
	dd = INT(B - D - INT(30.6001*E));
	if (E < 14) {
	  mm = E - 1;
	} else {
	  mm = E - 13;
	}
	if (mm < 3) {
	  yyyy = C - 4715;
	} else {
	  yyyy = C - 4716;
	}
	return new Array(dd, mm, yyyy);
}

function decodeLunarYear(yy, k) {
	var monthLengths, regularMonths, offsetOfTet, leapMonth, leapMonthLength, solarNY, currentJD, j, mm;
	var ly = new Array();
	monthLengths = new Array(29, 30);
	regularMonths = new Array(12);
	offsetOfTet = k >> 17;
	leapMonth = k & 0xf;
	leapMonthLength = monthLengths[k >> 16 & 0x1];
	solarNY = jdn(1, 1, yy);
	currentJD = solarNY+offsetOfTet;
	j = k >> 4;
	for(i = 0; i < 12; i++) {
		regularMonths[12 - i - 1] = monthLengths[j & 0x1];
		j >>= 1;
	}
	if (leapMonth == 0) {
		for(mm = 1; mm <= 12; mm++) {
			ly.push(new LunarDate(1, mm, yy, 0, currentJD));
			currentJD += regularMonths[mm-1];
		}
	} else {
		for(mm = 1; mm <= leapMonth; mm++) {
			ly.push(new LunarDate(1, mm, yy, 0, currentJD));
			currentJD += regularMonths[mm-1];
		}
		ly.push(new LunarDate(1, leapMonth, yy, 1, currentJD));
		currentJD += leapMonthLength;
		for(mm = leapMonth+1; mm <= 12; mm++) {
			ly.push(new LunarDate(1, mm, yy, 0, currentJD));
			currentJD += regularMonths[mm-1];
		}
	}
	return ly;
}

function getYearInfo(yyyy) {
	var yearCode;
	if (yyyy < 1900) {
		yearCode = TK19[yyyy - 1800];
	} else if (yyyy < 2000) {
		yearCode = TK20[yyyy - 1900];
	} else if (yyyy < 2100) {
		yearCode = TK21[yyyy - 2000];
	} else {
		yearCode = TK22[yyyy - 2100];
	}
	return decodeLunarYear(yyyy, yearCode);
}

var FIRST_DAY = jdn(25, 1, 1800); // Tet am lich 1800
var LAST_DAY = jdn(31, 12, 2199);

function findLunarDate(jd, ly) {
	if (jd > LAST_DAY || jd < FIRST_DAY || ly[0].jd > jd) {
		return new LunarDate(0, 0, 0, 0, jd);
	}
	var i = ly.length-1;
	while (jd < ly[i].jd) {
		i--;
	}
	var off = jd - ly[i].jd;
	ret = new LunarDate(ly[i].day+off, ly[i].month, ly[i].year, ly[i].leap, jd);
	return ret;
}

function getLunarDate(dd, mm, yyyy) {
	var ly, jd;
	if (yyyy < 1800 || 2199 < yyyy) {
		//return new LunarDate(0, 0, 0, 0, 0);
	}
	ly = getYearInfo(yyyy);
	jd = jdn(dd, mm, yyyy);
	if (jd < ly[0].jd) {
		ly = getYearInfo(yyyy - 1);
	}
	return findLunarDate(jd, ly);
}

/* Compute the longitude of the sun at any time.
 * Parameter: floating number jdn, the number of days since 1/1/4713 BC noon
 * Algorithm from: "Astronomical Algorithms" by Jean Meeus, 1998
 */
function SunLongitude(jdn) {
	var T, T2, dr, M, L0, DL, lambda, theta, omega;
	T = (jdn - 2451545.0 ) / 36525; // Time in Julian centuries from 2000-01-01 12:00:00 GMT
	T2 = T*T;
	dr = PI/180; // degree to radian
	M = 357.52910 + 35999.05030*T - 0.0001559*T2 - 0.00000048*T*T2; // mean anomaly, degree
	L0 = 280.46645 + 36000.76983*T + 0.0003032*T2; // mean longitude, degree
	DL = (1.914600 - 0.004817*T - 0.000014*T2)*Math.sin(dr*M);
	DL = DL + (0.019993 - 0.000101*T)*Math.sin(dr*2*M) + 0.000290*Math.sin(dr*3*M);
    theta = L0 + DL; // true longitude, degree
    // obtain apparent longitude by correcting for nutation and aberration
    omega = 125.04 - 1934.136 * T;
    lambda = theta - 0.00569 - 0.00478 * Math.sin(omega * dr);
    // Convert to radians
    lambda = lambda*dr;
	lambda = lambda - PI*2*(INT(lambda/(PI*2))); // Normalize to (0, 2*PI)
    return lambda;
}

/* Compute the sun segment at start (00:00) of the day with the given integral Julian day number.
 * The time zone if the time difference between local time and UTC: 7.0 for UTC+7:00.
 * The function returns a number between 0 and 23.
 * From the day after March equinox and the 1st major term after March equinox, 0 is returned.
 * After that, return 1, 2, 3 ...
 */
function getSunLongitude(dayNumber, timeZone) {
	return INT(SunLongitude(dayNumber - 0.5 - timeZone/24.0) / PI * 12);
}


var today = new Date();
//var currentLunarYear = getYearInfo(today.getFullYear());
var currentLunarDate = getLunarDate(today.getDate(), today.getMonth()+1, today.getFullYear());
var currentMonth = today.getMonth()+1;
var currentYear = today.getFullYear();
var dom = null;
var data = null;

function parseQuery(q) {
	var ret = new Array();
	if (q.length < 2) return ret;
	var s = q.substring(1, q.length);
	var arr = s.split("&");
	var i, j;
	for (i = 0; i < arr.length; i++) {
		var a = arr[i].split("=");
		for (j = 0; j < a.length; j++) {
			ret.push(a[j]);
		}
	}
	return ret;
}

function getSelectedMonth() {
	var query = window.location.search;
	var arr = parseQuery(query);
	var idx;
	for (idx = 0; idx < arr.length; idx++) {
		if (arr[idx] == "mm") {
			currentMonth = parseInt(arr[idx+1]);
		} else if (arr[idx] == "yy") {
			currentYear = parseInt(arr[idx+1]);
		}
	}
}

function getMonth(mm, yy) {
	var ly1, ly2, tet1, jd1, jd2, mm1, yy1, result, i;
	if (mm < 12) {
		mm1 = mm + 1;
		yy1 = yy;
	} else {
		mm1 = 1;
		yy1 = yy + 1;
	}
	jd1 = jdn(1, mm, yy);
	jd2 = jdn(1, mm1, yy1);
	ly1 = getYearInfo(yy);
	//alert('1/'+mm+'/'+yy+' = '+jd1+'; 1/'+mm1+'/'+yy1+' = '+jd2);
	tet1 = ly1[0].jd;
	result = new Array();
	if (tet1 <= jd1) { /* tet(yy) = tet1 < jd1 < jd2 <= 1.1.(yy+1) < tet(yy+1) */
		for (i = jd1; i < jd2; i++) {
			result.push(findLunarDate(i, ly1));
		}
	} else if (jd1 < tet1 && jd2 < tet1) { /* tet(yy-1) < jd1 < jd2 < tet1 = tet(yy) */
		ly1 = getYearInfo(yy - 1);
		for (i = jd1; i < jd2; i++) {
			result.push(findLunarDate(i, ly1));
		}
	} else if (jd1 < tet1 && tet1 <= jd2) { /* tet(yy-1) < jd1 < tet1 <= jd2 < tet(yy+1) */
		ly2 = getYearInfo(yy - 1);
		for (i = jd1; i < tet1; i++) {
			result.push(findLunarDate(i, ly2));
		}
		for (i = tet1; i < jd2; i++) {
			result.push(findLunarDate(i, ly1));
		}
	}
	return result;
}

function getDayName(lunarDate) {
	if (lunarDate.day == 0) {
		return "";
	}
	var cc = getCanChi(lunarDate);
	var s = "Ng\u00E0y " + cc[0] +", th\341ng "+cc[1] + ", n\u0103m " + cc[2];
	return s;
}

function getYearCanChi(year) {
	return CAN[(year+6) % 10] + " " + CHI[(year+8) % 12];
}

/*
 * Can cua gio Chinh Ty (00:00) cua ngay voi JDN nay
 */
function getCanHour0(jdn) {
	return CAN[(jdn-1)*2 % 10];
}

function getCanChi(lunar) {
	var dayName, monthName, yearName;
	dayName = CAN[(lunar.jd + 9) % 10] + " " + CHI[(lunar.jd+1)%12];
	monthName = CAN[(lunar.year*12+lunar.month+3) % 10] + " " + CHI[(lunar.month+1)%12];
	if (lunar.leap == 1) {
		monthName += " (nhu\u1EADn)";
	}
	yearName = getYearCanChi(lunar.year);
	// console.log('==== ' + yearName + " === " + lunar.year + " " + ((lunar.year+8) % 12));
	return new Array(dayName, monthName, yearName);
}
function getDayString(lunar, solarDay, solarMonth, solarYear) {
	var s;
	var dayOfWeek = TUAN[(lunar.jd + 1) % 7];
	s = dayOfWeek + " " + solarDay + "/" + solarMonth + "/" + solarYear;
	s += " -+- ";
	s = s + "Ng\u00E0y " + lunar.day+" th\341ng "+lunar.month;
	if (lunar.leap == 1) {
		s = s + " nhu\u1EADn";
	}
	return s;
}

function getTodayString() {
	var s = getDayString(currentLunarDate, today.getDate(), today.getMonth()+1, today.getFullYear());
	s += " n\u0103m " + getYearCanChi(currentLunarDate.year);
	return s;
}

function getCurrentTime() {
	today = new Date();
	var Std = today.getHours();
	var Min = today.getMinutes();
	var Sec = today.getSeconds();
	var s1  = ((Std < 10) ? "0" + Std : Std);
	var s2  = ((Min < 10) ? "0" + Min : Min);
	//var s3  = ((Sec < 10) ? "0" + Sec : Sec);
	//return s1 + ":" + s2 + ":" + s3;
	return s1 + ":" + s2;
}

function getGioHoangDao(jd) {
	var chiOfDay = (jd+1) % 12;
	var gioHD = GIO_HD[chiOfDay % 6]; // same values for Ty' (1) and Ngo. (6), for Suu and Mui etc.
	var ret = "";
	var count = 0;
	for (var i = 0; i < 12; i++) {
		if (gioHD.charAt(i) == '1') {
			ret += CHI[i];
			ret += ' ('+(i*2+23)%24+'-'+(i*2+1)%24+')';
			if (count++ < 5) ret += ', ';
			if (count == 3) ret += '\n';
		}
	}
	return ret;
}

var DAYNAMES = new Array("CN", "T2", "T3", "T4", "T5", "T6", "T7");
var MONTHNAMES = new Array("Giêng", "Hai", "Ba", "Tư", "Năm", "Sáu", "Bảy", "Tám", "Chín", "Mười", "Mười Một", "Chạp");
// var PRINT_OPTS = new OutputOptions();
// var FONT_SIZES = new Array("9pt", "13pt", "17pt");
// var TAB_WIDTHS = new Array("180px", "420px", "600px");
var baseDateCls = 'flx-cell date month-date stt ';

// function OutputOptions() {
// 	this.fontSize = "13pt";
// 	this.tableWidth = "420px";
// }

// function setOutputSize(size) {
// 	var idx = 1;
// 	if (size == "small") {
// 		idx = 0;
// 	} else if (size == "big") {
// 		idx = 2;
// 	} else {
// 		idx = 1;
// 	}
// 	PRINT_OPTS.fontSize = FONT_SIZES[idx];
// 	PRINT_OPTS.tableWidth = TAB_WIDTHS[idx];
// }

/*************************** TEMPLATE PRINTING ************ */
/*__BUILD__*/
function printFrame() {
	var res = [];
	res.push('<div class="main flx flx-col flx-sp">');
	res.push('<div class="top">');
	res.push('<div class="heading  stt flx"><div class="heading-text" id="solarMonth"></div></div>');
	res.push('<div class="heading2 stt flx flx-sp"><div class="hoatet"> </div><div class="heading2-text" id="solarDate"></div><div class="hoatet2"> </div></div>');
	res.push('<div class="heading3 flx"><div class="heading3-text" id="dayOfWeek"></div></div>')
	res.push('</div>');
	
	res.push('<div class="middle ">');
	res.push('<div class="middle-left flx-cell">');
	res.push('<div class="middle-lmonth" id="lunarMonth"></div>');
	res.push('<div class="middle-date" id="lunarDate"></div>');
	res.push('<div class="middle-year" id="lunarYear"></div>');
	res.push('</div>');
	res.push('<div class="middle-icon" id="yearIcon"> ');	
	res.push('</div>');
	res.push('<div class="middle-right flx-cell">');
	res.push('<div class="middle-month" id="lunarMonth2"></div>');
	res.push('<div class="middle-day" id="lunarDay"></div>');
	res.push('<div class="middle-hour" id="lunarHour"></div>');
	res.push('<div class="middle-season" id="lunarSeason"></div>');
	res.push('</div>');	
	res.push('</div>')

	res.push('<div class="goodhours">');
	res.push('<div class="goodhours-text" id="goodHours"></div>')
	res.push('</div>');
	
	printTableFrame(res);
	res.push('</div>')
	return res.join('');
}


function printHeadFrame(output) {
	output.push('<div class="flx line head">');
	for(var i=0;i<=6;i++) {
		output.push('<div class="flx flx-cell  date dow flx-center">'+DAYNAMES[i]+'</div>');
	}
	output.push('</div>');
}


function printNavFrame(op) {
	op.push('<div class="flx nav">');
	op.push('<div class="btn prev-year" onclick="return prevMonth(event)">&nbsp;</div>');
	op.push('<div class="btn prev-month" onclick="return prevDay(event)">&nbsp;</div>');
	op.push('<div class="btn next-month" onclick="return nextDay(event)">&nbsp;</div>');
	op.push('<div class="btn next-year" onclick="return nextMonth(event)">&nbsp;</div>');
	op.push('</div>')
}



function printTableFrame(res) {
	
	res.push('<div class="month " id="month">')
	printHeadFrame(res);
	res.push('<div class="month-body " id="monthBody">');
	for (var i =0; i < 6; i++) {
		res.push('<div data-row='+ i + ' class="flx month-line ">');
		for (var j = 0; j < 7; j++) {
			res.push('<div data-row=' + i + ' data-col=' + j + ' class="' + baseDateCls + '" onclick="return selectCell(event,' + i + ',' + j + ')">')
			res.push('<div class="abs solar"></div>');
			res.push('<div class="abs lunar"></div>');
			res.push('</div>');
		}
		res.push('</div>');
	}
	res.push('</div>');
	printNavFrame(res);
	res.push('</div>')
	
}
/*__END__BUILD__*/
/***************************END TEMPLATE PRINTING ************ */

function prepare() {
	var bd = document.getElementById('monthBody');
	var ds = bd.querySelectorAll('.month-date');
	var m = [];
	for (var i = 0; i < 6; i++) {
		var r = [];
		for (var j = 0; j < 7 ;j ++) {
			r.push(ds[i*7 + j]);
		}
		m.push(r);
	}
	dom = m;
}
function printSelectedMonth() {
	getSelectedMonth();
	return printMonth(currentMonth, currentYear);
}

function paintEmpty(r, c) {
	var node = dom[r][c];
	// while (node.hasChildNodes()) {
	// 	node.removeChild(node.lastChild);
	// }
	var n = node.querySelector('.solar');
	while (n.hasChildNodes()) {
		n.removeChild(n.lastChild);
	}
	n = node.querySelector('.lunar');
	while (n.hasChildNodes()) {
		n.removeChild(n.lastChild);
	}
	node.className = baseDateCls + ' empty';
}

function paintCell(lunarDate, solarDate, solarMonth, solarYear, r, c) {
	var cellClass, solarClass, lunarClass, solarColor;
	cellClass = "normal";
	solarClass = "t2t6";
	lunarClass = "am";
	solarColor = "black";
	var dow = (lunarDate.jd + 1) % 7;
	if (dow == 0) {
		solarClass = "cn";
		solarColor = "red";
	} else if (dow == 6) {
		solarClass = "t7";
		solarColor = "green";
	}
	
	if ((lunarDate.day >= 1 && lunarDate.day <= 6) && lunarDate.month == 1) {
		cellClass = "holiday";
	}
	if (solarDate == today.getDate() && solarMonth == today.getMonth()+1 && solarYear == today.getFullYear()) {
		cellClass = "today";
		
	}
	if (lunarDate.leap == 1) {
		lunarClass = "am2";
	}
	var lunar = lunarDate.day;
	if (solarDate == 1 || lunar == 1) {
		lunar = lunarDate.day + "/" + lunarDate.month;
	}

	var node = dom[r][c];
	var solar = node.querySelector('.solar');
	solar.innerText = solarDate;
	var lunarDom = node.querySelector('.lunar');
	lunarDom.innerText = lunar;
	node.className = baseDateCls + ' ' + cellClass + ' ' + solarClass;

	if (cellClass === 'today') {
		paintToday(lunarDate.day, lunarDate.month, lunarDate.year, lunarDate.leap, lunarDate.jd, solarDate, solarMonth, solarYear);
	}
}

function paintToday(dd, mm, yy, leap, jd, sday, smonth, syear) {
	var lunar = new LunarDate(dd, mm, yy, leap, jd);
	// var s = getDayString(lunar, sday, smonth, syear);

	var s;
	var dayOfWeek = TUAN[(lunar.jd + 1) % 7];
	document.getElementById('dayOfWeek').innerText = dayOfWeek;
	document.getElementById('solarDate').innerText = sday;
	document.getElementById('solarMonth').innerText = "Th\341ng " + smonth +" N\u0103m " + syear;

	// s = dayOfWeek + " " + solarDay + "/" + solarMonth + "/" + solarYear;
	// s += " -+- ";
	document.getElementById('lunarDate').innerText = lunar.day;
	document.getElementById('lunarMonth').innerText = "Th\341ng "+ MONTHNAMES[lunar.month -1]+ (lunar.leap === 1? " nhu\u1EADn": "");
	// s += "\nGi\u1EDD \u0111\u1EA7u ng\u00E0y: "+getCanHour0(jd)+" "+CHI[0];
	// s += "\nTi\u1EBFt: "+TIETKHI[getSunLongitude(jd+1, 7.0)];
	document.getElementById('lunarSeason').innerText = "Ti\u1EBFt "+TIETKHI[getSunLongitude(jd+1, 7.0)];
	document.getElementById('lunarHour').innerText =  "Gi\u1EDD "+getCanHour0(jd)+" "+CHI[0];
	if (lunar.day == 0) {
		return "";
	}
	var cc = getCanChi(lunar);
	document.getElementById('lunarDay').innerText = "Ng\u00E0y " + cc[0];
	document.getElementById('lunarMonth2').innerText = "Th\341ng "+cc[1];
	document.getElementById('lunarYear').innerText = "N\u0103m " + cc[2];
	document.getElementById('goodHours').innerText = "Gi\u1EDD ho\u00E0ng \u0111\u1EA1o: "+getGioHoangDao(jd);
	// var s = "Ng\u00E0y " + cc[0] +", th\341ng "+cc[1] + ", n\u0103m " + cc[2];
	// return s;
	// console.log(s);
	// s += "\nGi\u1EDD ho\u00E0ng \u0111\u1EA1o: "+getGioHoangDao(jd);
	// alert(s);
	document.getElementById('yearIcon').style.backgroundImage = 'url("./images/tuoi_' + ((lunar.year+8) % 12 + 1)  + '.png")';
}


function fillTable(mm, yy) {
	var i, j, k, solar, lunar, cellClass, solarClass, lunarClass;
	var currentMonth = getMonth(mm, yy);
	if (currentMonth.length == 0) return;
	var ld1 = currentMonth[0];
	var emptyCells = (ld1.jd + 1) % 7;
	// var MonthHead = mm + "/" + yy;
	// var LunarHead = getYearCanChi(ld1.year);
	data = [];
	for (i = 0; i < 6; i++) {
		var r = [];
		for (j = 0; j < 7; j++) {
			
			k = 7 * i + j;
			if (k < emptyCells || k >= emptyCells + currentMonth.length) {
				// res += printEmptyCell();				
				paintEmpty(i, j);
				r.push(0);
			} else {
				solar = k - emptyCells + 1;
				ld1 = currentMonth[k - emptyCells];
				// res += printCell(ld1, solar, mm, yy);
				paintCell(ld1, solar, mm, yy, i, j);
				var info = new Array(3);
				info[0] = solar;
				info[1] = mm;
				info[2] = yy;

				r.push(info);
			}
			
		}
		data.push(r);
	}

	// return res;
}

function printMonth(mm, yy) {

	fillTable(mm, yy);
}

function printYear(yy) {
	var yearName = "N&#x103;m " + getYearCanChi(yy) + " " + yy;
	var res = "";
	res += '<table align=center>\n';
	res += ('<tr><td colspan="3" class="tennam" onClick="showYearSelect();">'+yearName+'</td></tr>\n');
	for (var i = 1; i<= 12; i++) {
		if (i % 3 == 1) res += '<tr>\n';
		res += '<td>\n';
		res += printTable(i, yy);
		res += '</td>\n';
		if (i % 3 == 0) res += '</tr>\n';
	}
	res += '<table>\n';
	res += printFoot();
	return res;
}

// function printSelectedYear() {
// 	getSelectedMonth();
// 	return printYear(currentYear);
// }


function showCalendarFor(mm, yy, dd) {
	if (mm <= 0) {
		mm = 12;
		yy -= 1;
	}
	else if (mm > 12) {
		mm = mm % 12;
		yy += 1;
	}
	// if (mm !== currentMonth || yy !== currentYear) {}
	// dd = 1;

	today = new Date(yy, mm - 1, dd);
	currentLunarYear = getYearInfo(today.getFullYear());
	currentLunarDate = getLunarDate(today.getDate(), today.getMonth()+1, today.getFullYear());
	currentMonth = today.getMonth()+1;
	currentYear = today.getFullYear();
	fillTable(mm, yy);
}

function nextYear() {
	showCalendarFor(currentMonth, currentYear + 1, 1);
}

function nextMonth() {
	showCalendarFor(currentMonth + 1, currentYear, 1);
}
function prevYear() {
	showCalendarFor(currentMonth, currentYear - 1, 1);
}
function prevMonth() {
	showCalendarFor(currentMonth - 1, currentYear, 1);
}

function nextDay() {
	var tomorrow = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);
	// tomorrow.setDate(today.getDate()+1);
	showCalendarFor(tomorrow.getMonth() + 1, tomorrow.getFullYear(), tomorrow.getDate());
}

function prevDay() {
	var yesterday = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 1);
	// tomorrow.setDate(today.getDate()+1);
	showCalendarFor(yesterday.getMonth() + 1, yesterday.getFullYear(), yesterday.getDate());
}



function selectCell(e, r, c) {
	
	if (isNaN(r) || isNaN(c)) return;
	// get date and month
	// console.log('r = ' +r  + ' c =  ' + c);
	var info = data[r][c];
	// console.log(info);
	if (!info) return;
	var mm = info[1], yy = info[2], dd = info[0];
	today = new Date(yy, mm - 1, dd);
	fillTable(mm, yy);
	e.preventDefault();
	e.stopPropagation();
	return false;
	
}

function alertDayInfo(dd, mm, yy, leap, jd, sday, smonth, syear) {
	var lunar = new LunarDate(dd, mm, yy, leap, jd);
	var s = getDayString(lunar, sday, smonth, syear);
	s += " \u00E2m l\u1ECBch\n";
	s += getDayName(lunar);
	s += "\nGi\u1EDD \u0111\u1EA7u ng\u00E0y: "+getCanHour0(jd)+" "+CHI[0];
	s += "\nTi\u1EBFt: "+TIETKHI[getSunLongitude(jd+1, 7.0)];
	s += "\nGi\u1EDD ho\u00E0ng \u0111\u1EA1o: "+getGioHoangDao(jd);
	alert(s);
}


exports.printFrame = printFrame;