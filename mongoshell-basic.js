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
post.createdAt = new Date();
// save: Document�� _id �ʵ尡 ������
// 	update (����)
db.posts.save(post)

// ���� ������ ����(Update)
/* 
db.�÷��Ǹ�.update(
	{ ���� ������ ���� },
	{ $set:
		{ ������Ʈ �� ���� }
	}
);
*/
db.posts.update(
	{ "title": "First Post" },
	{ $set:
		{ createdAt: new Date(),
		  updatedAt: new Date() }
	}
);
        
// ��ü�� ���� : .remove
post = db.posts.findOne()
db.posts.remove(post)
        
// �˻� ���� ��ü�� �̿��� ����
db.posts.remove({"title": /Second/})

/*
db.posts �÷��ǿ�
title: "First Post", by: "bit", likes: 10
title: "Second Post", by: "hong", likes: 50
title: "Third Post", by: "bit", likes 30
title: "Fourth Post", by: "hone", likes: 10

INSERT ����
*/
db.posts.insert(
    {title: "First Post",
        by: "bit",
        likes: 10
    });
db.posts.insert(
    {title: "Second Post",
        by: "hong",
        likes: 50
    });
db.posts.insert(
    {title: "Third Post",
        by: "bit",
        likes: 30
    });
db.posts.insert(
    {title: "Fourth Post",
        by: "hong",
        likes: 10
    });
    
// ���� ������ insert
db.posts.insertMany([
	{title: "Fifth Post",
	  by: "bit",
	  likes: 50},
	{title: "Sixth Post",
	  by: "hong",
	  likes: 50}
])
          
// ������ �˻�
// findOne: ������ �����ϴ� ���� �� �� ���� ��ȯ
// find(): ������ �����ϴ� ������ Ŀ���� ��ȯ
db.posts.findOne()
db.posts.find()