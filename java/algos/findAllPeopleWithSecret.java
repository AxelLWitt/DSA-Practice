class Solution {
    public List<Integer> findAllPeople(int n, int[][] meetings, int firstPerson) {
        //create an array of ints set to a large value
        int[] groups = new int[100000];
        //create a list for integers that store the people who know the secret
        List<Integer> result = new ArrayList<>();
        //create a list of temporary people
        List<Integer> temp = new ArrayList<>();

        //iterate through the amount of people and store them in groups
        for (int i = 0; i < n; ++i) groups[i] = i;
        //set the first index of groups to 0(start of secret)
        groups[firstPerson] = 0;

        //sort the meetings into chornological order
        Arrays.sort(meetings, (a, b) -> Integer.compare(a[2], b[2]));

        //set up conditions for a while loop
        int i = 0;
        while (i < meetings.length) {
            //set the current time to the current meeting
            int currentTime = meetings[i][2];
            //clear the temp arraylist
            temp.clear();
            //while i is the same time as the meeting
            while (i < meetings.length && meetings[i][2] == currentTime) {
                //delegate helper function
                int g1 = find(groups, meetings[i][0]);
                int g2 = find(groups, meetings[i][1]);
                groups[Math.max(g1, g2)] = Math.min(g1, g2);
                temp.add(meetings[i][0]);
                temp.add(meetings[i][1]);
                ++i;
            }
            for (int j = 0; j < temp.size(); ++j) {
                if (find(groups, temp.get(j)) != 0) {
                    groups[temp.get(j)] = temp.get(j);
                }
            }
        }

        for (int j = 0; j < n; ++j) {
            if (find(groups, j) == 0) result.add(j);
        }

        return result;
    }

    //helper function
    private int find(int[] groups, int index) {
        while (index != groups[index]) index = groups[index];
        return index;
    }
}