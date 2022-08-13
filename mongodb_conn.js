const { MongoClient } = require('mongodb');

async function main() {
  const client = new MongoClient(
    'mongodb+srv://root:mongo2115@cluster0.zswgwlz.mongodb.net/?retryWrites=true&w=majority'
  );
  try {
    await client.connect();

    await listDatabases(client);
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

main().catch(console.error);

async function listDatabases(client) {
  databasesList = await client.db().admin().listDatabases();

  console.log('Databases:');
  databasesList.databases.forEach((db) => console.log(` - ${db.name}`));
}
