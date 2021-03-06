/*
	Licensed to the Apache Software Foundation (ASF) under one
	or more contributor license agreements.  See the NOTICE file
	distributed with this work for additional information
	regarding copyright ownership.  The ASF licenses this file
	to you under the Apache License, Version 2.0 (the
	"License"); you may not use this file except in compliance
	with the License.  You may obtain a copy of the License at
	
	http://www.apache.org/licenses/LICENSE-2.0

	Unless required by applicable law or agreed to in writing,
	software distributed under the License is distributed on an
	"AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
	KIND, either express or implied.  See the License for the
	specific language governing permissions and limitations
	under the License.
*/

/* Fixed Data in ROM - Field and Curve parameters */

var ROM_CURVE_BN254CX={

// BN254CX Curve 
// Base Bits= 24

CURVE_A: 0,
CURVE_B_I: 2,
CURVE_B: [0x2,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0],
CURVE_Order: [0xEB1F6D,0xC0A636,0xCEBE11,0xCC906,0x3FD6EE,0x66D2C4,0x647A63,0xB0BDDF,0x702A0D,0x8,0x2400],
CURVE_Gx: [0x1B55B2,0x23EF5C,0xE1BE66,0x18093E,0x3FD6EE,0x66D324,0x647A63,0xB0BDDF,0x702A0D,0x8,0x2400],
CURVE_Gy: [0x1,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0],

CURVE_Bnx: [0xC012B1,0x3,0x4000,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0],
CURVE_Cof: [0x1,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0],
CURVE_Cru: [0x235C97,0x931794,0x5631E0,0x71EF87,0xBDDF64,0x3F1440,0xCA8,0x480000,0x0,0x0,0x0],
CURVE_Pxa: [0x5FAAF5,0xE806CB,0x2851C3,0x1B9936,0x4FB8E6,0xC2F094,0x73CB19,0xA7121C,0x9A9B4F,0x5A5B7F,0x1AC9],
CURVE_Pxb: [0x15F433,0x60FC,0x4DEDE5,0xABDA09,0xBA33A1,0x364C1B,0xD1681F,0x3F11C2,0x656604,0x300103,0x53D],
CURVE_Pya: [0x72A299,0x216A97,0x4E6833,0x6EA348,0xDFF093,0x406479,0xFEF918,0xEE06BB,0x9E6FB2,0x7970B0,0x1572],
CURVE_Pyb: [0x49E8CD,0xC11F9C,0xADC41B,0x91A061,0x200560,0x166D3,0x7F5607,0xD57BD7,0xAC189F,0xB56C02,0x11BC],
CURVE_W: [[0x2FEB83,0x634916,0x120054,0xB4038,0x0,0x60,0x0,0x0,0x0,0x0,0x0],[0x802561,0x7,0x8000,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0]],
CURVE_SB: [[[0xB010E4,0x63491D,0x128054,0xB4038,0x0,0x60,0x0,0x0,0x0,0x0,0x0],[0x802561,0x7,0x8000,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0]],[[0x802561,0x7,0x8000,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0],[0xBB33EA,0x5D5D20,0xBCBDBD,0x188CE,0x3FD6EE,0x66D264,0x647A63,0xB0BDDF,0x702A0D,0x8,0x2400]]],
CURVE_WB: [[0x7A84B0,0x211856,0xB0401C,0x3C012,0x0,0x20,0x0,0x0,0x0,0x0,0x0],[0x220475,0xF995BE,0x9A36CD,0xA8CA7F,0x7E94ED,0x2A0DC0,0x870,0x300000,0x0,0x0,0x0],[0xF10B93,0xFCCAE0,0xCD3B66,0xD4653F,0x3F4A76,0x1506E0,0x438,0x180000,0x0,0x0,0x0],[0xFAAA11,0x21185D,0xB0C01C,0x3C012,0x0,0x20,0x0,0x0,0x0,0x0,0x0]],
CURVE_BB: [[[0x2B0CBD,0xC0A633,0xCE7E11,0xCC906,0x3FD6EE,0x66D2C4,0x647A63,0xB0BDDF,0x702A0D,0x8,0x2400],[0x2B0CBC,0xC0A633,0xCE7E11,0xCC906,0x3FD6EE,0x66D2C4,0x647A63,0xB0BDDF,0x702A0D,0x8,0x2400],[0x2B0CBC,0xC0A633,0xCE7E11,0xCC906,0x3FD6EE,0x66D2C4,0x647A63,0xB0BDDF,0x702A0D,0x8,0x2400],[0x802562,0x7,0x8000,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0]],[[0x802561,0x7,0x8000,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0],[0x2B0CBC,0xC0A633,0xCE7E11,0xCC906,0x3FD6EE,0x66D2C4,0x647A63,0xB0BDDF,0x702A0D,0x8,0x2400],[0x2B0CBD,0xC0A633,0xCE7E11,0xCC906,0x3FD6EE,0x66D2C4,0x647A63,0xB0BDDF,0x702A0D,0x8,0x2400],[0x2B0CBC,0xC0A633,0xCE7E11,0xCC906,0x3FD6EE,0x66D2C4,0x647A63,0xB0BDDF,0x702A0D,0x8,0x2400]],[[0x802562,0x7,0x8000,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0],[0x802561,0x7,0x8000,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0],[0x802561,0x7,0x8000,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0],[0x802561,0x7,0x8000,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0]],[[0xC012B2,0x3,0x4000,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0],[0x4AC2,0xF,0x10000,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0],[0x6AFA0A,0xC0A62F,0xCE3E11,0xCC906,0x3FD6EE,0x66D2C4,0x647A63,0xB0BDDF,0x702A0D,0x8,0x2400],[0xC012B2,0x3,0x4000,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0]]],



USE_GLV: true,
USE_GS_G2: true,
USE_GS_GT: true,	
GT_STRONG: false,

//debug: false,

};

