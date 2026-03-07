#1
def common_end(a, b):
    return a[0] == b[0] or a[-1] == b[-1]
#2
def sum3(nums):
    return sum(nums)
#3
def max_end3(nums):
    m = max(nums[0], nums[-1])
    return [m, m, m]
#4
def make_pi():
    return [3, 1, 4]
#5
def same_first_last(nums):
    return len(nums) >= 1 and nums[0] == nums[-1]
#6
def same_first_last(nums):
    return len(nums) >= 1 and nums[0] == nums[-1]
#7
def rotate_left3(nums):
    return [nums[1], nums[2], nums[0]]