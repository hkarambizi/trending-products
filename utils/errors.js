// Errors utility
module.exports = {
	FIELD_LENGTH(fields, targetFields) {
  	throw new Error(
        `# of fields must match # of values.\n\tFields(${fields.length}): ${fields.toString()} \n\tValues(${targetFields.length}): ${targetFields.toString()}`
      )
  },
  MISSING_FIELDS(valueCheckResults) {
  	throw new Error("There are values that do not exist on element you are mapping: \n Missing values: " + valueCheckResults.missingValues.toString())
  },
  MODIFIER_ARGUMENT(modifierCheckResults) {
  	throw new Error(
        `Invalid modifier: \n\tFields(${modifierCheckResults.matches.length}): ${modifierCheckResults.matches.toString()} already exist on new object. \nProvide new field names or pass the fields and matching targetFields as first and second arguments\n formatResults arguments: \n[field:String], \n[targetField:String], \n[\nmodifier:{\n  fieldName: String; args: String[] | Number[]; \n  fn: Function(args: any[]);  // example fn with 2 modifier.args: (args){ return arg[0] * arg[1] }  (returns multiplied value of args) \n  passInitialObjectAsFirstArg: Boolean  // pass 'true' if you wish to add the mapped over object to be used as a first arg in the modifier.fn\n  }\n ]\n`
      )
  },

}
