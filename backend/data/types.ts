export interface TopologyData {
  nodes: Node[];
  links: Link[];
  nodeSets: NodeSet[];
}

export interface Node extends Coordinates{
  id: NodeId;
  name?: string
};

interface Coordinates {
  x: number;
  y: number;
  fx?: number;
  fy?: number
}

export interface Link {
  source: NodeId;
  target: NodeId;
};

export interface NodeSet {
  id: NodeId;
  nodes: NodeId[];
  root: NodeId
}

type NodeId = string;
