from Graph import UDGraph
from collections import deque


def bfs(graph: UDGraph, start: int, end: int) -> bool:
    """Perform Breadth-First Search to find a path from start to end on an undirected graph.

    Args:
        graph (UWGraph):    undirected graph
        start (int):        starting node
        end (int):          ending node

    Returns:
        bool:               True if there is a path from start node to end node
                            False otherwise.
    """

    # if start not in graph.adj_list or end not in graph.adj_list:
    #     print("Start or end node not present in the graph")
    #     return False

    queue = deque()
    queue.extend(graph.adj_list[start])
    visited = set()

    while queue:
        curr_node = queue.popleft()

        if curr_node not in visited:
            if curr_node == end:
                print("Found!")
                return True

            queue.extend(graph.adj_list[curr_node])
            visited.add(curr_node)

    print("No path found from ", start, "->", end)
    return False


if __name__ == "__main__":
    graph = UDGraph()
    graph.add_edge("a", "b")
    graph.add_edge("b", "d")
    graph.add_edge("d", "h")
    graph.add_edge("h", "j")
    graph.add_edge("j", "l")
    graph.add_edge("l", "m")

    graph.add_edge("a", "c")
    graph.add_edge("c", "e")
    graph.add_edge("e", "g")
    graph.add_edge("e", "i")
    graph.add_edge("i", "k")

    bfs(graph, "a", "m")
