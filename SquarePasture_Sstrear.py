# initialize file
file = open("square.in", "r")
lines = file.readlines()
file.close()

# read inputs
x1_1, y1_1, x2_1, y2_1 = map(int, lines[0].strip().split())
x1_2, y1_2, x2_2, y2_2 = map(int, lines[1].strip().split())

# calculate the lower-left and upper-right corners of the combined rectangular pasture
x1 = min(x1_1, x1_2)
y1 = min(y1_1, y1_2)
x2 = max(x2_1, x2_2)
y2 = max(y2_1, y2_2)

# calculate the area of the square pasture required
area = max(x2 - x1, y2 - y1) ** 2

# print the result
# print answer
out = open("square.out", "w")
out.write(str(area))
out.close()
