//DFS
var floodFill = function(image, sr, sc, color) {
    let originalColor = image[sr][sc]
    let newColor = color
    if(originalColor===newColor){
        return image
    }
    DFS(image, sr, sc, originalColor, newColor)
    return image
};

function DFS(image, r, c, originalColor, newColor){
    if(r<0||r>=image.length||c<0||c>=image[r].length){
        return
    }
    if(image[r][c]!==originalColor){
        return
    }
    image[r][c]=newColor
    DFS(image, r+1, c, originalColor, newColor)
    DFS(image, r, c+1, originalColor, newColor)
    DFS(image, r-1, c, originalColor, newColor)
    DFS(image, r, c-1, originalColor, newColor)
}