#1
print(input().title())
#2
def minion_game(string):
    vowels = 'AEIOU'
    kevin = 0
    stuart = 0
    
    for i, ch in enumerate(string):
        score = len(string) - i
        if ch in vowels:
            kevin += score
        else:
            stuart += score
    
    if kevin > stuart:
        print(f"Kevin {kevin}")
    elif stuart > kevin:
        print(f"Stuart {stuart}")
    else:
        print("Draw")

s = input()
minion_game(s)
#3
import math

class Points(object):
    def __init__(self, x, y, z):
        self.x = x
        self.y = y
        self.z = z

    def __sub__(self, no):
        return Points(self.x - no.x, self.y - no.y, self.z - no.z)

    def dot(self, no):
        return self.x * no.x + self.y * no.y + self.z * no.z

    def cross(self, no):
        return Points(
            self.y * no.z - self.z * no.y,
            self.z * no.x - self.x * no.z,
            self.x * no.y - self.y * no.x
        )

    def absolute(self):
        return pow(self.x ** 2 + self.y ** 2 + self.z ** 2, 0.5)

if __name__ == '__main__':
    a = list(map(float, input().split()))
    b = list(map(float, input().split()))
    c = list(map(float, input().split()))
    d = list(map(float, input().split()))

    A = Points(*a)
    B = Points(*b)
    C = Points(*c)
    D = Points(*d)

    X = (B - A).cross(B - C)  
    Y = (C - B).cross(C - D) 

    cos_phi = X.dot(Y) / (X.absolute() * Y.absolute())
    cos_phi = max(-1.0, min(1.0, cos_phi))  

    print(round(math.degrees(math.acos(cos_phi)), 2))
#4
import re

regex_integer_in_range = r'^[1-9][0-9]{5}$'
regex_alternating_repetitive_digit_pair = r'(?=(.).\1)'

P = input()
print(bool(re.match(regex_integer_in_range, P)) and len(re.findall(regex_alternating_repetitive_digit_pair, P)) < 2)
#5
from collections import OrderedDict

n = int(input())
counts = OrderedDict()

for _ in range(n):
    word = input()
    if word in counts:
        counts[word] += 1
    else:
        counts[word] = 1

print(len(counts))
print(*counts.values())
#8
from itertools import groupby

s = input()
print(' '.join(f'({len(list(g))}, {k})' for k, g in groupby(s)))
#9
n, m = map(int, input().split())
rows = [input().split() for _ in range(n)]
k = int(input())

rows.sort(key=lambda row: int(row[k - 1]))

for row in rows:
    print(*row)
#10
if __name__ == '__main__':
    a = int(input())
    b = int(input())
    print(a // b)
    print(a / b)