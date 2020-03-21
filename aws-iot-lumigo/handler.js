'use strict';

module.exports.transformRecords = async event => {
  console.log(`Received the following event\n`, event);
  const records = event.records.map((record) => {
    return {
      recordId: record.recordId,
      result: 'Ok',
      data: record.data,
    };
  });
  return { records };
};
