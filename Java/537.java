class Solution {
    public String complexNumberMultiply(String a, String b) {
        String[] aArr = a.split("\\+|i");
		String[] bArr = b.split("\\+|i");
		
		int a1 = Integer.parseInt(aArr[0]);
		int a2 = Integer.parseInt(aArr[1]);
		int b1 = Integer.parseInt(bArr[0]);
		int b2 = Integer.parseInt(bArr[1]);
		return ( (a1 * b1 - a2 * b2) + "+" + (a1 * b2 + a2 * b1 ) + "i" );
    }
}