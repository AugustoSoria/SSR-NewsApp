export interface Article {
  _id: string
  display_date: string
  headlines: {
    basic: string
  }
  promo_items?: {
    basic: Basic
  }
  subtype: string
  taxonomy: {
    tags: Tag[]
  }
  website_url: string
}

export interface Basic {
  resized_urls?: ResizedUrl[]
  subtitle?: string
  type: string
  url?: string
}

export interface ResizedUrl {
  option: {
    media: string
  }
  resizedUrl: string
}

export interface Tag {
  slug: string
  text: string
}
