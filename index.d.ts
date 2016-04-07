declare module "izzy" {

  export type Type = "array"   | "boolean"  | "undefined"
                   | "element" | "function" | "nan"
                   | "null"    | "number"   | "object"
                   | "string"

  interface Izzy {
    // eg. izzy('string', 'foo')
    (type: Type, value: any): boolean
    (type: "array", value: any): value is Array<any>
    (type: "boolean", value: any): value is Boolean
    (type: "undefined", value: any): value is void
    (type: "element", value: any): value is Element
    (type: "function", value: any): value is Function
    (type: "nan", value: any): value is Number
    (type: "null", value: any): value is void
    (type: "number", value: any): value is Number
    (type: "object", value: any): value is Object
    (type: "string", value: any): value is String

    // eg. izzy.string('foo')
    array(value: any): value is Array<any>
    boolean(value: any): value is Boolean
    element(value: any): value is Element
    function(value: any): value is Function
    nan(value: any): value is Number
    null(value: any): value is void
    number(value: any): value is Number
    object(value: any): value is Object
    string(value: any): value is String
  }

  const izzy: Izzy
  export default izzy
}