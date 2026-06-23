public class twosum2{
    public static void main(String args[])
    {
        int[] arr={1,3,4,5,7,11};
        int left=0;
        int right=arr.length-1;
        int target=9;
        while(left<right)
        {
            int sum=arr[left]+arr[right];
            if(sum==target)
            {
                System.out.println(left+right);
            }
            else if(sum>target){
                right--;
            }else{

                left++;
            }
        }
        

    }
}