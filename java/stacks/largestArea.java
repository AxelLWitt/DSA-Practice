Stack
(6 / 7)

Prerequisites

Stacks

Data Structures & Algorithms for Beginners
Status
Star
Problem   
Difficulty   
Video Solution
Code
	
	Valid Parentheses	
	
	Min Stack	
	
	Evaluate Reverse Polish Notation	
	
	Generate Parentheses	
	
	Daily Temperatures	
	
	Car Fleet	
	
	Largest Rectangle In Histogram	
View on Github
class Solution {
    public int largestRectangleArea(int[] heights) {
      int area = 0, n = heights.length;
      int start;
      Stack<Pair<Integer,Integer>> stack = new Stack<>();
      for(int i=0;i<heights.length;i++){
         int curHt =heights[i];
         start = i;
        while(!stack.isEmpty() && stack.peek().getValue() > curHt){
          Pair<Integer,Integer> pair = stack.pop();
          int index = pair.getKey();
          int h = pair.getValue();
          area = Math.max(area, h * (i - index));
          start = index;
        }
        stack.push(new Pair(start,curHt));
      }
      
       while(!stack.isEmpty()){
          Pair<Integer,Integer> pair = stack.pop();
          int index = pair.getKey();
          int h = pair.getValue();
          area = Math.max(area, h * (n - index));
       }
        return area;
    }
  
}