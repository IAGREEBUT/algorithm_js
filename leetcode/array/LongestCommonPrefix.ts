//Longest common prefix
//https://leetcode.com/problems/longest-common-prefix/?submissionId=1916903529

function longestCommonPrefix(strs: string[]): string {
    if (!strs.length) return ""

    //sorted by alphabetically
    let sortedArr = strs.sort((a,b) => a < b ? -1 : 1)

    for(let i=0; i<sortedArr[0].length; i++){
        if(sortedArr[0][i] !== sortedArr[sortedArr.length-1][i])
            return sortedArr[0].substring(0,i);
    }

    return sortedArr[0];
};