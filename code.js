
function augmentingPath(graph, start, end) {
// if start equals end, then return a path
// if the start is equal to the end then you are already at the needed node
// if you are at point A trying to get to point A the answer is known because you are already there
    if (start === end){
        return [start];
    }
// using the helper function to find the path
    const result = helper(graph, start, end, []);
//if a path IS found, return the path
    if (result) {
        return result;
    }
//if a path is NOT found, return an emtpy array
    return [];
}

function helper(graph, currentNode, endNode, path) {
    //must add the current node to the path
    const updatedPath = [...path, currentNode];
    
    // create a base case, this would be if the current node is the target node
    // return a path
    if (currentNode === endNode) {
        return updatedPath;
    }

    //need to explore the neighbors of the current node
    //for each neighbor we need to check these in order to avoid cycles
    //did detecting cyccles before this one which actually helped my understanding 
    const neighbors = graph[currentNode];
    if (neighbors) {
        for (const neighbor in neighbors) {
            //checking to see if there is a connection bewteen the current node and the neighbor,
            //making sure they're valid connections
            //this will help with avoiding invalid paths and getting the wrong output
            const isEdge = neighbors[neighbor];

            // checking if the neighbor is not already in the path and has capacity
            if (!path.includes(neighbor) && isEdge) {
                const foundPath = helper(graph, neighbor, endNode, updatedPath);

                //if there is a valid path found, return it!
                if (foundPath) {
                    return foundPath;
                }
            }
        }
    }
    //if there is not valid path then return null
    return null;
}