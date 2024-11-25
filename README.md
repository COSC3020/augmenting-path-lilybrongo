# Augmenting Paths

When we talked about the Ford-Fulkerson algorithm to find the maximum flow
through a graph, I mentioned the "find an augmenting path" function. You're
going to implement this function. Start with the template I provided in
`code.js`. Use an adjacency list data structure to represent the graph and node
names, not indices, to indicate start and end node. The function returns a list
of node names, starting with the start node and finishing with the end node. If
start and end node are the same, it should return a list containing only this
node. If there is no path, you must return an empty list.

Test your new function; I've provided some basic testing code in `code.test.js`.

To illustrate, here's an example graph:
![example graph](graph.png)

Here's the call for this graph:

```javascript
var graph = {'foo': {'boo': 7},
             'boo': {'foo': 3, 'bar': 2},
             'bar': {'boo': 4}};
augmentingPath(graph, 'foo', 'bar');
```

The call would return `['foo', 'boo', 'bar']`.

Feel free to use other data structures, but you'll have to change the test code
accordingly.

## Runtime Analysis

What is the worst-case big $\Theta$ complexity of your implementation? Add your
answer, including your reasoning, to this markdown file.

The worst-case big $\Theta$ complexity of my implementation would be $\Theta (|V| + |E|)$. This is because in this situation each node maps to its neighbor, meaning that for a graph with V vertices and E edges the total cost would be proportional to V + E. Since the worst case for this algorithm would be if we needed to check each vertex and edge before we were able to find a path that is how we can get the worst case complexity. This is also similar to detecting cycles because in that exercise we also needed to check each vertex and edge in order to find if there was a cycle or not. 

referenced DjReflexive and howardthegr8one's repository to getan idea of how to approach this problem. Also used the lecture slides to get an understanding of the Ford-Fulkerson algorithm, as well as geeks for geeks: https://www.geeksforgeeks.org/ford-fulkerson-algorithm-for-maximum-flow-problem/ for a better understanding. 