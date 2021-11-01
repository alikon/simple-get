
    export interface Links {
        self: string;
    }

    export interface Attributes {
        id: string;
        asset_id: string;
        title: string;
        alias: string;
        state: string;
        access: string;
        created: string;
        created_by: string;
        created_by_alias: string;
        modified: string;
        featured: string;
        language: string;
        hits: string;
        publish_up: string;
        publish_down?: any;
        note: string;
        images: any;
        metakey: string;
        metadesc: string;
        metadata: any;
        version: string;
        featured_up?: any;
        featured_down?: any;
        typeAlias: string;
        text: string;
        ['about-the-author']: string;
        sql: string;
        tags: any[];
    }

    export interface Data {
        type: string;
        id: string;
    }

    export interface Category {
        data: Data;
    }

    export interface Data2 {
        type: string;
        id: string;
    }

    export interface CreatedBy {
        data: Data2;
    }

    export interface Relationships {
        category: Category;
        created_by: CreatedBy;
    }

    export interface Datum {
        type: string;
        id: string;
        attributes: Attributes;
        relationships: Relationships;
    }

    export interface Meta {
        ['total-pages']: number;
    }

    export interface Article {
        links: Links;
        data: Datum[];
        meta: Meta;
    }

