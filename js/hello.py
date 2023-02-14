def fct1(arr,ele,v):
   v=0
   for k in range(0,len(arr)):
    if arr[k] == ele:
        v+=1
   return v

# int var

arr=['d','d','b','d']
ch=' '
x=0
for i in range(0,len(arr)): 
    if arr[i] not in ch:
        ch+=arr[i]
        x=fct1(arr,arr[i],0)
        ch+=str(x)
print(ch)