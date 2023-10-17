const possiblePlays = [
	[58, 6, 37, 4, 5, 35, 74, 86, 15],
	[85, 60, 68, 24, 49, 14, 89, 82, 9],
	[78, 61, 70, 65, 50, 5, 81, 52, 100],
	[100, 18, 70, 60, 14, 31, 87, 4, 20],
	[26, 6, 51, 53, 69, 25, 7, 70, 3],
	[69, 91, 90, 39, 7, 27, 12, 2, 20],
	[33, 57, 8, 97, 51, 85, 14, 78, 98],
	[94, 91, 9, 20, 54, 12, 82, 53, 65],
	[97, 58, 86, 44, 76, 22, 94, 17, 2],
	[31, 14, 75, 52, 32, 65, 61, 26, 93],
	[17, 2, 37, 79, 75, 55, 31, 42, 4],
	[64, 95, 47, 35, 43, 59, 83, 24, 94],
	[28, 27, 8, 48, 21, 23, 37, 85, 30],
	[34, 7, 26, 58, 99, 60, 85, 68, 59],
	[60, 77, 35, 55, 49, 25, 76, 63, 92],
	[13, 59, 6, 9, 50, 92, 5, 95, 23],
	[47, 77, 18, 23, 21, 72, 76, 100, 25],
	[12, 18, 25, 50, 22, 1, 29, 60, 70],
	[89, 66, 7, 94, 72, 63, 31, 43, 39],
	[75, 70, 60, 9, 35, 56, 51, 63, 10],
	[90, 42, 16, 21, 29, 10, 95, 24, 58],
	[72, 91, 15, 58, 53, 71, 27, 68, 36],
	[11, 66, 47, 13, 36, 80, 54, 38, 86],
	[73, 54, 18, 27, 74, 34, 75, 14, 65],
	[19, 87, 52, 21, 29, 73, 16, 68, 60],
	[3, 20, 40, 38, 95, 71, 69, 30, 88],
	[82, 7, 54, 99, 64, 84, 14, 24, 6],
	[63, 41, 85, 57, 66, 5, 16, 81, 90],
	[43, 42, 35, 93, 23, 92, 67, 3, 32],
	[22, 52, 71, 6, 58, 98, 78, 19, 75],
	[63, 13, 97, 95, 49, 55, 80, 61, 53],
	[87, 58, 9, 45, 70, 19, 86, 83, 89],
	[17, 32, 94, 59, 87, 97, 82, 36, 4],
	[36, 51, 70, 28, 18, 34, 79, 48, 87],
	[1, 96, 97, 50, 44, 99, 75, 58, 42],
	[9, 59, 79, 14, 66, 78, 76, 44, 74],
	[29, 70, 56, 80, 81, 23, 100, 62, 32],
	[80, 3, 96, 29, 65, 98, 39, 77, 78],
	[1, 74, 15, 7, 100, 85, 81, 24, 94],
	[14, 12, 9, 80, 32, 28, 26, 60, 30],
	[84, 32, 93, 42, 20, 92, 36, 72, 89],
	[3, 98, 12, 4, 73, 83, 64, 30, 90],
	[43, 82, 76, 49, 100, 90, 26, 92, 29],
	[27, 24, 37, 54, 59, 71, 69, 46, 29],
	[30, 2, 3, 45, 75, 32, 17, 76, 67],
	[76, 59, 75, 98, 46, 83, 8, 92, 43],
	[80, 5, 91, 97, 35, 9, 68, 46, 96],
	[41, 29, 70, 23, 88, 32, 55, 68, 27],
	[58, 81, 82, 37, 49, 56, 47, 53, 14],
	[21, 14, 8, 35, 2, 24, 52, 82, 67],
	[67, 74, 37, 88, 22, 12, 56, 45, 82],
	[24, 64, 88, 35, 95, 76, 22, 83, 55],
	[61, 70, 23, 77, 20, 38, 48, 14, 21],
	[22, 30, 66, 55, 1, 53, 84, 8, 32],
	[93, 55, 88, 90, 74, 71, 11, 2, 91],
	[28, 51, 10, 60, 18, 78, 32, 41, 95],
	[21, 46, 80, 41, 2, 47, 60, 63, 26],
	[25, 19, 18, 36, 42, 37, 6, 32, 94],
	[56, 94, 81, 53, 43, 11, 16, 68, 83],
	[18, 39, 68, 40, 86, 6, 75, 32, 1],
	[12, 5, 71, 62, 54, 35, 53, 94, 78],
	[93, 97, 54, 99, 90, 46, 43, 80, 60],
	[35, 10, 8, 79, 25, 6, 47, 60, 86],
	[13, 55, 76, 65, 87, 47, 73, 29, 67],
	[51, 95, 86, 89, 64, 66, 9, 25, 67],
	[34, 76, 50, 33, 98, 99, 57, 81, 59],
	[75, 36, 41, 60, 17, 52, 31, 87, 70],
	[42, 32, 21, 33, 12, 35, 61, 71, 22],
	[85, 40, 45, 64, 26, 11, 60, 21, 7],
	[33, 29, 87, 78, 79, 57, 4, 22, 93],
	[68, 21, 5, 81, 17, 88, 67, 72, 28],
	[1, 97, 58, 3, 57, 95, 80, 91, 74],
	[81, 75, 36, 34, 91, 43, 42, 83, 39],
	[49, 84, 88, 63, 30, 91, 57, 62, 83],
	[79, 80, 27, 36, 57, 42, 65, 99, 39],
	[72, 62, 94, 47, 95, 6, 76, 82, 49],
	[27, 52, 14, 65, 74, 55, 60, 71, 61],
	[83, 20, 10, 35, 47, 26, 72, 11, 98],
	[27, 91, 95, 7, 57, 62, 55, 85, 94],
	[61, 19, 45, 17, 59, 44, 91, 46, 70],
	[12, 48, 44, 34, 53, 96, 49, 37, 74],
	[9, 48, 78, 66, 34, 63, 57, 36, 100],
	[61, 98, 35, 52, 65, 70, 46, 92, 9],
	[14, 34, 24, 59, 51, 22, 25, 35, 23],
	[97, 98, 8, 25, 88, 42, 67, 22, 58],
	[91, 77, 58, 88, 17, 3, 66, 67, 55],
	[87, 73, 89, 93, 88, 92, 45, 55, 79],
	[70, 90, 14, 94, 53, 79, 66, 58, 3],
	[80, 19, 93, 40, 98, 56, 58, 69, 2],
	[48, 79, 94, 73, 47, 31, 50, 30, 44],
	[38, 70, 9, 10, 61, 16, 92, 19, 75],
	[67, 85, 70, 65, 72, 36, 9, 28, 13],
	[76, 19, 85, 39, 66, 24, 64, 61, 5],
	[61, 9, 85, 71, 73, 60, 86, 4, 69],
	[53, 2, 67, 16, 61, 15, 27, 9, 14],
	[64, 65, 69, 31, 20, 3, 29, 1, 88],
	[7, 15, 43, 91, 76, 52, 96, 9, 33],
	[78, 40, 56, 82, 57, 77, 62, 60, 32],
	[24, 1, 80, 99, 61, 18, 76, 27, 78],
	[76, 10, 71, 97, 53, 31, 91, 64, 51],
	[75, 3, 85, 23, 99, 51, 9, 53, 30],
	[11, 76, 7, 50, 56, 22, 32, 98, 4],
	[72, 45, 14, 37, 7, 24, 31, 26, 15],
	[67, 1, 12, 43, 27, 42, 73, 32, 39],
	[39, 75, 42, 54, 38, 5, 68, 7, 21],
	[45, 16, 85, 37, 46, 75, 39, 30, 11],
	[55, 88, 14, 56, 49, 39, 92, 82, 70],
	[39, 37, 98, 96, 54, 97, 31, 74, 75],
	[78, 1, 84, 6, 98, 35, 73, 28, 86],
	[37, 6, 17, 93, 70, 48, 95, 42, 36],
	[23, 45, 26, 70, 63, 97, 22, 82, 4],
	[58, 65, 12, 31, 84, 90, 8, 70, 69],
	[99, 81, 93, 11, 43, 34, 46, 80, 7],
	[48, 65, 1, 27, 20, 72, 24, 11, 19],
	[77, 53, 56, 60, 35, 45, 75, 39, 50],
	[93, 12, 66, 72, 70, 84, 35, 68, 18],
	[14, 74, 3, 31, 75, 81, 97, 48, 57],
	[37, 30, 75, 42, 1, 35, 66, 28, 87],
	[38, 50, 71, 74, 13, 98, 33, 100, 81],
	[98, 49, 96, 68, 42, 72, 34, 86, 18],
	[16, 85, 37, 23, 93, 78, 98, 56, 36],
	[26, 44, 64, 79, 89, 18, 53, 22, 29],
	[68, 23, 3, 14, 71, 13, 4, 53, 72],
	[32, 55, 53, 34, 56, 98, 78, 54, 41],
	[21, 85, 39, 59, 31, 40, 11, 35, 2],
	[54, 85, 11, 55, 21, 40, 56, 26, 90],
	[32, 76, 45, 2, 9, 21, 98, 48, 78],
	[8, 49, 73, 33, 77, 95, 58, 83, 92],
	[84, 31, 34, 87, 75, 73, 30, 57, 39],
	[38, 91, 94, 43, 6, 48, 85, 31, 83],
	[84, 6, 35, 80, 22, 46, 55, 61, 21],
	[50, 79, 94, 54, 58, 57, 43, 44, 55],
	[96, 34, 69, 15, 76, 9, 10, 5, 14],
	[30, 84, 57, 9, 40, 59, 7, 49, 53],
	[22, 84, 93, 76, 44, 25, 21, 86, 100],
	[16, 34, 38, 95, 4, 98, 23, 90, 2],
	[9, 71, 81, 41, 85, 87, 32, 4, 17],
	[30, 94, 53, 19, 11, 49, 20, 71, 78],
	[55, 12, 23, 54, 86, 66, 49, 53, 71],
	[79, 66, 50, 13, 97, 46, 88, 26, 54],
	[75, 2, 51, 18, 16, 64, 100, 70, 48],
	[43, 89, 21, 100, 41, 76, 34, 73, 99],
	[72, 65, 20, 78, 30, 82, 71, 59, 13],
	[52, 43, 81, 16, 1, 5, 8, 88, 57],
	[53, 3, 5, 61, 17, 21, 54, 48, 52],
	[1, 55, 27, 70, 35, 58, 8, 17, 50],
	[88, 16, 62, 33, 98, 8, 68, 59, 74],
	[80, 31, 58, 30, 35, 28, 56, 8, 23],
	[80, 79, 82, 43, 69, 35, 17, 42, 98],
	[13, 71, 62, 30, 78, 14, 12, 1, 46],
	[84, 5, 24, 92, 51, 39, 59, 57, 40],
	[23, 98, 84, 24, 51, 31, 61, 34, 44],
	[44, 55, 17, 38, 11, 22, 20, 5, 76],
	[10, 9, 2, 33, 73, 48, 6, 84, 94],
	[40, 67, 36, 15, 66, 10, 51, 68, 69],
	[74, 70, 59, 36, 1, 60, 25, 97, 81],
	[5, 36, 61, 43, 84, 41, 23, 3, 42],
	[3, 59, 81, 47, 65, 89, 9, 48, 31],
	[52, 77, 28, 24, 36, 8, 48, 3, 88],
	[38, 52, 86, 63, 10, 5, 61, 64, 9],
	[47, 97, 56, 11, 62, 71, 78, 70, 58],
	[93, 3, 6, 45, 9, 79, 42, 94, 54],
	[20, 56, 83, 52, 7, 77, 35, 74, 51],
	[98, 36, 46, 20, 2, 48, 32, 44, 63],
	[28, 79, 4, 90, 97, 67, 61, 81, 34],
	[94, 85, 78, 12, 95, 59, 53, 48, 49],
	[45, 75, 80, 87, 95, 92, 5, 56, 90],
	[80, 9, 90, 77, 79, 75, 89, 18, 20],
	[12, 63, 77, 78, 45, 74, 13, 61, 91],
	[11, 1, 34, 61, 8, 100, 18, 70, 37],
	[67, 36, 70, 30, 17, 34, 37, 5, 91],
	[37, 69, 55, 94, 40, 80, 18, 52, 58],
	[27, 74, 25, 24, 73, 72, 46, 86, 33],
	[67, 93, 38, 52, 15, 76, 26, 66, 96],
	[56, 22, 10, 52, 61, 66, 42, 76, 15],
	[41, 14, 55, 67, 59, 77, 61, 57, 96],
	[67, 26, 12, 57, 16, 55, 45, 24, 64],
	[28, 33, 44, 10, 19, 93, 92, 50, 25],
	[51, 9, 56, 33, 85, 5, 65, 30, 49],
	[89, 40, 84, 7, 14, 70, 57, 79, 83],
	[79, 8, 89, 88, 91, 75, 53, 29, 65],
	[29, 93, 19, 31, 22, 63, 32, 77, 50],
	[65, 91, 14, 45, 92, 54, 95, 60, 37],
	[72, 76, 16, 28, 92, 48, 21, 39, 88],
	[12, 87, 55, 53, 69, 68, 26, 49, 78],
	[44, 48, 50, 8, 89, 1, 51, 56, 16],
	[85, 21, 48, 67, 39, 12, 90, 47, 13],
	[100, 16, 61, 59, 36, 55, 9, 23, 64],
	[66, 67, 59, 43, 38, 94, 73, 84, 78],
	[85, 66, 51, 30, 22, 18, 9, 70, 8],
	[27, 64, 23, 20, 39, 45, 68, 36, 63],
	[52, 60, 56, 27, 13, 64, 14, 62, 34],
	[75, 7, 51, 25, 91, 98, 87, 86, 10],
	[6, 75, 89, 58, 85, 78, 96, 98, 64],
	[84, 86, 4, 64, 67, 47, 57, 18, 20],
	[77, 27, 68, 96, 22, 4, 56, 54, 72],
	[45, 22, 70, 46, 82, 7, 61, 23, 93],
	[82, 60, 3, 96, 63, 49, 52, 23, 95],
	[76, 6, 84, 36, 92, 23, 53, 15, 20],
	[98, 59, 83, 47, 100, 84, 60, 78, 68],
	[31, 70, 3, 86, 88, 83, 92, 96, 52],
	[19, 55, 70, 78, 66, 62, 65, 97, 10],
	[92, 38, 65, 20, 26, 39, 27, 60, 24],
	[7, 25, 85, 93, 94, 9, 49, 75, 11],
	[85, 18, 50, 23, 92, 49, 90, 37, 80],
	[12, 60, 56, 44, 23, 80, 69, 93, 91],
	[39, 27, 73, 64, 41, 91, 1, 7, 40],
	[12, 27, 28, 58, 26, 9, 60, 48, 87],
	[89, 10, 41, 14, 30, 19, 20, 85, 21],
	[53, 63, 58, 35, 7, 51, 44, 19, 18],
	[91, 38, 96, 25, 33, 11, 93, 89, 73],
	[82, 99, 54, 12, 20, 93, 76, 50, 67],
	[21, 61, 37, 84, 31, 82, 97, 42, 69],
	[23, 96, 46, 22, 32, 36, 5, 92, 9],
	[92, 76, 6, 56, 93, 73, 4, 88, 31],
	[11, 67, 44, 100, 87, 71, 16, 78, 76],
	[97, 66, 95, 92, 48, 47, 15, 44, 80],
	[9, 45, 37, 16, 23, 99, 31, 97, 1],
	[13, 62, 87, 28, 5, 54, 93, 91, 21],
	[10, 7, 49, 97, 3, 48, 22, 9, 21],
	[59, 83, 67, 21, 23, 49, 43, 46, 79],
	[35, 51, 31, 7, 69, 11, 96, 21, 36],
	[80, 95, 17, 93, 20, 77, 78, 40, 13],
	[84, 45, 42, 19, 26, 12, 50, 4, 97],
	[98, 35, 6, 64, 29, 81, 62, 54, 87],
	[11, 79, 77, 20, 5, 82, 49, 95, 22],
	[56, 79, 69, 12, 24, 66, 27, 95, 5],
	[96, 39, 88, 42, 41, 94, 72, 84, 64],
	[19, 37, 15, 38, 59, 16, 34, 78, 98],
	[27, 1, 67, 94, 42, 46, 74, 49, 71],
	[7, 89, 26, 57, 44, 66, 99, 25, 60],
	[90, 10, 51, 21, 32, 9, 60, 31, 92],
	[48, 76, 58, 40, 47, 61, 1, 2, 23],
	[72, 91, 34, 74, 90, 83, 42, 8, 99],
	[60, 58, 42, 44, 15, 30, 36, 95, 6],
	[14, 37, 1, 97, 70, 2, 60, 83, 76],
	[40, 51, 34, 99, 74, 14, 24, 16, 27],
	[55, 24, 100, 74, 5, 8, 75, 15, 70],
	[50, 72, 27, 56, 67, 49, 88, 7, 73],
	[68, 67, 55, 86, 69, 84, 46, 4, 76],
	[77, 48, 16, 63, 12, 19, 89, 88, 7],
	[31, 47, 44, 52, 25, 98, 8, 87, 13],
	[84, 80, 33, 15, 3, 1, 13, 70, 7],
	[64, 84, 15, 37, 27, 60, 72, 81, 77],
	[17, 88, 23, 98, 6, 54, 61, 46, 67],
	[28, 55, 46, 36, 73, 33, 18, 22, 95],
	[17, 79, 73, 54, 57, 52, 51, 58, 44],
	[12, 32, 2, 71, 27, 33, 39, 3, 78],
	[2, 29, 56, 31, 69, 28, 75, 1, 61],
	[75, 93, 65, 39, 76, 21, 69, 18, 7],
	[56, 94, 3, 74, 67, 23, 78, 86, 91],
	[58, 23, 30, 19, 67, 2, 11, 10, 84],
	[14, 19, 48, 32, 72, 39, 83, 34, 54],
	[94, 65, 15, 37, 79, 60, 9, 29, 55],
	[72, 31, 42, 73, 32, 92, 10, 27, 54],
	[3, 84, 15, 48, 16, 37, 52, 73, 5],
	[30, 11, 81, 69, 18, 62, 17, 1, 38],
	[31, 25, 16, 87, 7, 13, 89, 60, 84],
	[49, 17, 92, 86, 69, 53, 58, 1, 18],
	[96, 30, 2, 87, 41, 45, 95, 6, 22],
	[20, 93, 21, 45, 28, 49, 26, 29, 85],
	[65, 84, 73, 31, 35, 11, 55, 38, 13],
	[80, 16, 3, 26, 23, 47, 1, 29, 74],
	[22, 11, 3, 68, 58, 17, 41, 55, 78],
	[69, 81, 39, 86, 5, 53, 92, 75, 16],
	[59, 75, 28, 42, 98, 3, 22, 74, 57],
	[35, 91, 75, 4, 38, 77, 54, 25, 45],
	[18, 54, 50, 71, 19, 48, 32, 34, 38],
	[69, 26, 49, 9, 7, 6, 4, 63, 60],
	[74, 68, 6, 39, 44, 64, 78, 63, 61],
	[89, 31, 82, 52, 42, 11, 92, 2, 3],
	[2, 19, 53, 14, 18, 46, 48, 92, 83],
	[41, 32, 11, 24, 53, 18, 85, 47, 25],
	[56, 78, 7, 98, 48, 20, 76, 31, 14],
	[85, 6, 64, 45, 84, 56, 73, 70, 87],
	[80, 89, 79, 75, 64, 44, 70, 35, 96],
	[15, 67, 62, 81, 47, 75, 17, 43, 56],
	[77, 15, 84, 54, 30, 78, 29, 13, 24],
	[84, 55, 14, 17, 98, 19, 20, 80, 65],
	[42, 44, 72, 97, 18, 49, 23, 73, 56],
	[20, 45, 4, 44, 51, 56, 33, 9, 18],
	[33, 73, 7, 61, 59, 79, 2, 31, 12],
	[54, 87, 71, 68, 99, 49, 12, 19, 84],
	[3, 38, 87, 13, 100, 57, 29, 78, 50],
	[93, 86, 29, 2, 5, 65, 10, 7, 74],
	[91, 27, 83, 53, 13, 70, 39, 40, 62],
	[56, 13, 27, 34, 5, 10, 31, 45, 40],
	[89, 42, 34, 7, 81, 46, 66, 19, 40],
	[41, 98, 38, 4, 77, 78, 31, 61, 64],
	[62, 18, 91, 65, 57, 51, 97, 69, 8],
	[79, 73, 10, 34, 12, 54, 96, 46, 23],
	[30, 22, 10, 84, 68, 56, 1, 48, 61],
	[52, 83, 50, 66, 5, 37, 97, 72, 94],
	[4, 76, 28, 9, 71, 21, 29, 100, 19],
	[80, 43, 78, 31, 5, 69, 20, 37, 94],
	[98, 77, 83, 26, 72, 21, 8, 76, 28],
	[92, 91, 76, 64, 34, 67, 58, 83, 11],
	[10, 20, 85, 49, 2, 32, 21, 63, 67],
	[11, 16, 42, 86, 77, 32, 79, 31, 27],
	[6, 24, 61, 74, 86, 31, 46, 57, 17],
	[12, 3, 61, 11, 58, 44, 18, 40, 16],
	[50, 6, 64, 33, 12, 97, 21, 85, 81],
	[76, 7, 3, 43, 54, 50, 34, 63, 66],
	[90, 36, 9, 20, 29, 80, 1, 89, 85],
	[37, 67, 12, 6, 44, 69, 59, 9, 61],
	[4, 67, 46, 22, 43, 48, 13, 99, 95],
	[59, 49, 52, 40, 62, 65, 41, 30, 17],
	[14, 92, 52, 41, 57, 3, 55, 7, 97],
	[32, 42, 43, 28, 50, 52, 58, 93, 64],
	[84, 71, 86, 16, 55, 23, 51, 50, 61],
	[69, 56, 83, 3, 58, 99, 20, 96, 27],
	[91, 56, 64, 24, 79, 82, 61, 13, 99],
	[25, 12, 85, 66, 6, 47, 56, 71, 38],
	[88, 85, 54, 98, 8, 22, 44, 5, 63],
	[54, 98, 83, 14, 59, 7, 5, 71, 3],
	[8, 30, 38, 87, 72, 96, 20, 10, 44],
	[26, 58, 41, 35, 28, 92, 90, 82, 8],
	[36, 67, 14, 42, 65, 29, 15, 20, 26],
	[91, 60, 19, 57, 28, 68, 59, 86, 77],
	[61, 71, 18, 40, 6, 96, 65, 50, 15],
	[97, 36, 86, 53, 28, 20, 49, 15, 55],
	[14, 80, 10, 82, 30, 99, 13, 54, 42],
	[52, 71, 73, 55, 36, 42, 93, 41, 20],
	[55, 67, 71, 27, 68, 70, 57, 17, 61],
	[87, 28, 18, 68, 8, 1, 69, 47, 30],
	[26, 95, 100, 97, 27, 22, 44, 99, 77],
	[29, 56, 97, 37, 94, 12, 90, 53, 8],
	[74, 15, 41, 51, 54, 96, 81, 37, 2],
	[81, 23, 89, 27, 10, 2, 99, 17, 49],
	[30, 17, 31, 52, 71, 64, 20, 16, 38],
	[23, 19, 36, 66, 68, 38, 89, 8, 80],
	[69, 45, 93, 7, 90, 82, 78, 76, 84],
	[12, 100, 78, 60, 70, 93, 35, 72, 95],
	[41, 2, 26, 12, 9, 77, 40, 46, 92],
	[31, 33, 74, 35, 7, 49, 64, 66, 41],
	[32, 67, 94, 33, 90, 10, 87, 54, 93],
	[93, 92, 83, 41, 80, 89, 22, 35, 95],
	[9, 94, 18, 24, 1, 63, 11, 43, 90],
	[82, 93, 97, 63, 77, 44, 27, 99, 15],
	[90, 96, 59, 66, 64, 40, 33, 82, 13],
	[18, 14, 56, 92, 91, 1, 78, 7, 41],
	[55, 28, 52, 95, 41, 30, 12, 23, 79],
	[67, 57, 97, 28, 16, 61, 25, 96, 55],
	[73, 68, 42, 22, 49, 36, 23, 30, 33],
	[44, 91, 39, 83, 37, 50, 1, 66, 3],
	[65, 56, 52, 28, 84, 24, 6, 69, 92],
	[88, 69, 87, 74, 42, 47, 62, 79, 86],
	[61, 33, 16, 47, 62, 94, 19, 4, 97],
	[88, 72, 54, 74, 89, 52, 30, 10, 81],
	[91, 39, 77, 85, 84, 98, 21, 67, 72],
	[42, 87, 68, 40, 24, 45, 46, 97, 96],
	[47, 96, 44, 42, 72, 65, 94, 32, 74],
	[40, 42, 97, 3, 58, 54, 52, 23, 74],
	[39, 47, 2, 87, 66, 34, 20, 81, 35],
	[67, 100, 15, 68, 66, 84, 9, 55, 88],
	[83, 99, 18, 52, 51, 43, 75, 31, 19],
	[96, 37, 64, 81, 76, 77, 22, 13, 29],
	[91, 87, 49, 97, 41, 88, 28, 6, 79],
	[97, 25, 10, 69, 28, 7, 92, 94, 11],
	[18, 89, 27, 30, 88, 12, 69, 1, 16],
	[21, 86, 93, 76, 27, 82, 80, 72, 39],
	[5, 44, 48, 71, 99, 9, 26, 68, 94],
	[6, 2, 45, 35, 48, 64, 68, 39, 47],
	[71, 52, 56, 83, 76, 42, 91, 98, 20],
	[45, 52, 57, 3, 29, 42, 88, 9, 55],
	[19, 41, 31, 51, 3, 44, 17, 33, 29],
]

const numbersToPlace = possiblePlays[getDayNumber()]

let playedNumbers = []
let turn = 0
let game = 1
let nextNumber

initGame()

function getDayNumber() {
	const now = new Date()
	return (
		(Date.UTC(now.getFullYear(), now.getMonth(), now.getDate()) -
			Date.UTC(now.getFullYear(), 0, 0)) /
		24 /
		60 /
		60 /
		1000
	)
}

async function sleep(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms))
}

function updateUi() {
	document.getElementById("number-to-place").innerText = nextNumber
}

function checkAllOptions(randomNumber) {
	let availableOptions = 0

	let closestOver = 101
	let closestUnder = 0

	for (let i = 0; i < playedNumbers.length; i++) {
		if (playedNumbers[i]) {
			if (playedNumbers[i] < randomNumber) {
				closestUnder = playedNumbers[i]
			} else {
				closestOver = playedNumbers[i]
				break
			}
		}
	}

	const closestUnderIndex = playedNumbers.findIndex((a) => a === closestUnder)
	const closestOverIndex = playedNumbers.findIndex((a) => a === closestOver)

	for (let i = 0; i < playedNumbers.length; i++) {
		const button = document.getElementById(`button-${i}`)
		if (button.innerText === "") {
			//Nothing has been placed
			if (closestUnderIndex === -1 && closestOverIndex === -1) {
				availableOptions = availableOptions + 1
				button.disabled = false
				button.classList = "button button-to-rank button--available"
				continue
			}

			//All numbers placed are more than the next Number
			if (closestUnderIndex === -1) {
				if (i < closestOverIndex) {
					availableOptions = availableOptions + 1
					button.disabled = false
					button.classList = "button button-to-rank button--available"
				} else {
					button.disabled = true
					button.classList =
						"button button-to-rank button--unavailable"
				}
				continue
			}

			//All numbers placed are less than the next Number
			if (closestOverIndex === -1) {
				if (i > closestUnderIndex) {
					availableOptions = availableOptions + 1
					button.disabled = false
					button.classList = "button button-to-rank button--available"
				} else {
					button.disabled = true
					button.classList =
						"button button-to-rank button--unavailable"
				}
				continue
			}

			// Next number is between numbers placed
			if (i > closestUnderIndex && i < closestOverIndex) {
				availableOptions = availableOptions + 1
				button.disabled = false
				button.classList = "button button-to-rank button--available"
			} else {
				button.disabled = true
				button.classList = "button button-to-rank button--unavailable"
			}
		}
	}

	return availableOptions > 0
}

async function getNextRound() {
	turn = turn + 1
	nextNumber = numbersToPlace[turn]
	updateUi()
	const canStillPlay = checkAllOptions(nextNumber)

	if (!canStillPlay) {
		document.body.style.backgroundColor = "#9A3B3B"
		document.getElementById(`turn-played-${game}`).innerText += "🟥"
		await sleep(5000)
		game = game + 1
		initGame()
	} else {
		document.getElementById(`turn-played-${game}`).innerText = "🟩".repeat(
			turn
		)
	}
}
function initButtons() {
	const buttonList = document.getElementById("buttonList")
	buttonList.innerHTML = ""
	document.body.style.backgroundColor = "#FFEEF4"

	for (let counter = 0; counter < 9; counter = counter + 1) {
		let button = document.createElement("button")
		button.className = "button button-to-rank button--available"
		button.id = `button-${counter}`
		button.dataset.index = counter
		button.innerText = ""
		button.addEventListener("click", async () => {
			if (button.innerText === "") {
				button.innerText = nextNumber
				button.disabled = true
				button.className = "button button-to-rank button--filled"
				playedNumbers.splice(button.dataset.index, 1, nextNumber)
				await getNextRound()
			}
		})
		buttonList.appendChild(button)
	}
}

function initTurns() {
	turn = 0
	nextNumber = numbersToPlace[turn]

	const gamesPlayedElement = document.getElementById("games-played")
	const turnsForGame = document.createElement("li")
	turnsForGame.id = `turn-played-${game}`
	gamesPlayedElement.appendChild(turnsForGame)
	updateUi()

	for (let counter = 0; counter < 9; counter = counter + 1) {
		playedNumbers[counter] = undefined
	}
}

function initGame() {
	initButtons()
	initTurns()
}
