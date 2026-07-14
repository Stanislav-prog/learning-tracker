export type TopicStatus = "created" | "in-progress" | "completed";

export type TopicPriority = "low" | "medium" | "high";

export interface Topic {
    id: string;
    title: string;
    description: string;
    status: TopicStatus;
    priority: TopicPriority;
    estimatedHours: number;
    completedHours: number;
}
