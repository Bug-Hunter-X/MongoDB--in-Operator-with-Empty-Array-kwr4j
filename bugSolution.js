```javascript
function findDocuments(field, filterArray) {
  let query = {};
  if (filterArray.length === 0) {
    // If the array is empty, return all documents
    return db.collection.find(query);
  } else {
    query[field] = { $in: filterArray };
    return db.collection.find(query);
  }
}

// Example usage:
const documents = findDocuments('field', []); // Returns all documents
const documents2 = findDocuments('field', ['value1', 'value2']);// Returns documents where field is 'value1' or 'value2'
```