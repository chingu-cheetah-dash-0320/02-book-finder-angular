
export interface Book {
    kind?:       Kind;
    id?:         string;
    etag?:       string;
    selfLink?:   string;
    volumeInfo?: VolumeInfo;
    saleInfo?:   SaleInfo;
    accessInfo?: AccessInfo;
    searchInfo?: SearchInfo;
}

interface AccessInfo {
    country?:                Country;
    viewability?:            Viewability;
    embeddable?:             boolean;
    publicDomain?:           boolean;
    textToSpeechPermission?: TextToSpeechPermission;
    epub?:                   Epub;
    pdf?:                    Epub;
    webReaderLink?:          string;
    accessViewStatus?:       AccessViewStatus;
    quoteSharingAllowed?:    boolean;
}

enum AccessViewStatus {
    None = "NONE",
    Sample = "SAMPLE",
}

enum Country {
    Nz = "NZ",
}

interface Epub {
    isAvailable?:  boolean;
    acsTokenLink?: string;
}

enum TextToSpeechPermission {
    Allowed = "ALLOWED",
    AllowedForAccessibility = "ALLOWED_FOR_ACCESSIBILITY",
}

enum Viewability {
    NoPages = "NO_PAGES",
    Partial = "PARTIAL",
}

enum Kind {
    BooksVolume = "books#volume",
}

interface SaleInfo {
    country?:     Country;
    saleability?: Saleability;
    isEbook?:     boolean;
    listPrice?:   SaleInfoListPrice;
    retailPrice?: SaleInfoListPrice;
    buyLink?:     string;
    offers?:      Offer[];
}

interface SaleInfoListPrice {
    amount?:       number;
    currencyCode?: CurrencyCode;
}

enum CurrencyCode {
    Nzd = "NZD",
}

interface Offer {
    finskyOfferType?: number;
    listPrice?:       OfferListPrice;
    retailPrice?:     OfferListPrice;
}

interface OfferListPrice {
    amountInMicros?: number;
    currencyCode?:   CurrencyCode;
}

enum Saleability {
    ForSale = "FOR_SALE",
    NotForSale = "NOT_FOR_SALE",
}

interface SearchInfo {
    textSnippet?: string;
}

interface VolumeInfo {
    title?:               string;
    authors?:             string[];
    publisher?:           string;
    publishedDate?:       string;
    description?:         string;
    industryIdentifiers?: IndustryIdentifier[];
    readingModes?:        ReadingModes;
    pageCount?:           number;
    printType?:           PrintType;
    categories?:          string[];
    maturityRating?:      MaturityRating;
    allowAnonLogging?:    boolean;
    contentVersion?:      string;
    panelizationSummary?: PanelizationSummary;
    imageLinks?:          ImageLinks;
    language?:            Language;
    previewLink?:         string;
    infoLink?:            string;
    canonicalVolumeLink?: string;
    subtitle?:            string;
    averageRating?:       number;
    ratingsCount?:        number;
}

interface ImageLinks {
    smallThumbnail?: string;
    thumbnail?:      string;
}

interface IndustryIdentifier {
    type?:       Type;
    identifier?: string;
}

enum Type {
    Isbn10 = "ISBN_10",
    Isbn13 = "ISBN_13",
}

enum Language {
    En = "en",
}

enum MaturityRating {
    NotMature = "NOT_MATURE",
}

interface PanelizationSummary {
    containsEpubBubbles?:  boolean;
    containsImageBubbles?: boolean;
}

enum PrintType {
    Book = "BOOK",
}

interface ReadingModes {
    text?:  boolean;
    image?: boolean;
}
