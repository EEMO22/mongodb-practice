// ���� ����DB�� �ִ� �����ͺ��̽��� ��� Ȯ��
show dbs

// �����ͺ��̽��� ���
use local

// Ȯ��
db

// ���� collection Ȯ��
show collections

// ������ ���� ���� �ʿ� ����
// ������ ���ؼ��� db.dropDatabase()

// DB ���� Ȯ��
db.stats();

// Ư�� �÷����� ����
db.startup_log.stats();

// mydb �����ͺ��̽� ����
use mydb

// ���� �����ͺ��̽� Ȯ��
db

// title�� First Post�� ������ ����
db.posts.insert({"title": "First Post"})

// Document �˻�
// 1�� ���� �˻� : findOne()
db.posts.findOne();

// JSON ��ü �����
let post = {
	"title": "Second Post"
}

db.posts.save(post);

// save: Document�� _id �ʵ尡 ������
// insert (����)

// ���� �� ���� ����
post = db.posts.findOne();
post
// _id�� �����Ǿ� �ִ�
// ��Ű���� ������ ���� �ʴ�.
post.createAt = new Date();
// save: Document�� _id �ʵ尡 ������
// 	update (����)
db.posts.save(post)