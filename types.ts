export interface NavItem {
    label: string;
    href: string;
}

export interface TeamMember {
    role: string;
    name?: string;
    description: string;
    icon: string;
}

export interface ChatMessage {
    role: 'user' | 'model';
    text: string;
}
