#1
def string_times(str, n):
  result = ""
  for i in range(n): 
    result = result + str 
  return result
#2
def string_splosion(str):
  result = ""
  for i in range(len(str)):
    result = result + str[:i+1]
  return result
#3
def array_front9(nums):
  end = len(nums)
  if end > 4:
    end = 4
  for i in range(end):
    if nums[i] == 9:
      return True
  return False
#4
def front_times(str, n):
  front_len = 3
  if front_len > len(str):
    front_len = len(str)
  front = str[:front_len]
  
  result = ""
  for i in range(n):
    result = result + front
  return result