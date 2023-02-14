class test{
    public static void main(String[] args) {
        int[] arr={15,15};
        System.out.println(average(arr));
        
    }
    public static double average(int[] array) {
        // write your code here
        double moy;
        int s=0;
        for(int i=0;i<array.length;i++){
              s=array[i]+s;
        }
        moy=s/array.length;
        return moy;
      }
}