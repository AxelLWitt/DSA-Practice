//DFS

//floodfill function delaration for recursive callback
var floodFill = function(image, sr, sc, color) {
    //declare the original color set as the default values of sr and sc
    let originalColor = image[sr][sc]
    //set the new color to color passed in the function
    let newColor = color
    //if the original color is the new color, end the function
    if(originalColor===newColor){
        return image
    }
    //call DFS 
    DFS(image, sr, sc, originalColor, newColor)
    //when DFS is complete return the image
    return image
};

function DFS(image, r, c, originalColor, newColor){
    //base case declaration for declaring boundaries
    if(r<0||r>=image.length||c<0||c>=image[r].length){
        return
    }
    //base case if the original tile is not the original color
    if(image[r][c]!==originalColor){
        return
    }
    //setting the first tile to the new color
    image[r][c]=newColor
    //recursivley checking the tiles if they are the new color
    DFS(image, r+1, c, originalColor, newColor)//checks to the bottom
    DFS(image, r, c+1, originalColor, newColor)//checks right
    DFS(image, r-1, c, originalColor, newColor)//checks up
    DFS(image, r, c-1, originalColor, newColor)//checks left
}

//more approachable

function floodFill(image, sr, sc, color){
    //declare a constant color
    const original = image[sr][sc]
    //invoke a new function for DFS
    function DFS(image, r, c){
        //create a base case
        if(r<0||r>image.length-1||c<0||c>image[0].length-1||image[r][c]!==original||image[r][c]==color){
            //return if base case is true
            return image
        }
        //set the new value of image to the new color
        image[r][c]=color
        //check locations
        DFS(image, r+1, c)//check right
        DFS(image, r-1, c)//check left
        DFS(image, r, c+1)//check bottom
        DFS(image, r, c-1)//check top
        //return image after all recursive calls
        return image
    }
    //return recursive call until it reaches base case
    return DFS(image, sr, sc)
}