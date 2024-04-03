from collections import defaultdict


class UDGraph:
    def __init__(self) -> None:
        self.adj_list = defaultdict(list)

    def add_edge(self, u: int, v: int) -> None:
        """Add an undirected edge between nodes u and v

        Args:
            u (int): Node
            v (int): Node
        """
        self.adj_list[u].append(v)

    def __str__(self) -> str:
        """Return a string representation of the graph

        Returns:
            str: Representation of the graph
        """
        return "\n".join(
            f"{node}: {neighbors}" for node, neighbors in self.adj_list.items()
        )
