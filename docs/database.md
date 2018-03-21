```sql
/*
    sonwflake
    id: bigint
    name: char(30)
    title: char (50)
    描述: varchar(300)
    邮箱、链接: char(100)
    node-bigint
    建立索引，提升查询效率
*/
create table if not exists target_type (
    target_key tinyint primary key,
    target_value varchar(50) not null
);

create table if not exists editer_type (
    editer_key tinyint primary key,
    editer_value char(50)
);

create table if not exists message_type (
    message_key tinyint primary key,
    message_value char(50)
);

create table if not exists resource (
    source_id bigint primary key,
    source_url char(100) not null,
    source_type tinyint not null
);



create table if not exists author (
    author_id bigint primary key, /* 主键 作者id */
    avator_id bigint,
    nick_name char(30),
    sex tinyint default 0, /* unknow male female */
    introduction varchar(300),
    website char(100),
    er_code_id bigint, /* image id */
    create_date datetime,
    reword_open bool,
    reword_description varchar(300),
    password char(64) not null,
    phone char(11),
    email varchar(100),
    editer_type tinyint default 1, /* 1.markdown 2.富文本、等等 */
    mail_recive boolean default false,
    is_disabled boolean default false,
    should_audit_comment boolean default false, /* 是否需要审核评论 */
    balance int default 10 /* 积分 */
);

create table if not exists article (
    article_id bigint primary key,
    title char(50) not null,
    author_id bigint not null, /* 外键 */
    word_counts int default 0, /* 字数 */
    read_count int default 0, /* 阅读次数 */
    like_count int default 0,
    content text not null,
    is_publish boolean default false,
    article_group_id bigint not null,
    create_date datetime default now(),
    lastmodify datetime default now(),
    /**/
    comment_date datetime,
    comment_id bigint,
    is_reported boolean default false, /* 是否被举报 */
    is_revoke boolean default false, /* 是否被撤回 */
    should_be_audit boolean default false /* 是否需要被审核 */
);

create table if not exists article_group (
    article_group_id bigint primary key,
    name char(50) not null,
    author_id bigint not null,
    cover_id bigint, /* 封面图片id */
    description varchar(300),
    article_count int default 0,
    follow_count int default 0,
    create_date datetime default now()
);

create table if not exists subject (
    subject_id bigint primary key,
    name char(50) not null,
    author_id bigint not null,
    cover_id bigint, /* 封面图片id */
    description varchar(300),
    article_count int default 0,
    follow_count int default 0,
    create_date datetime default now(),
    allow_contribute boolean default true,
    should_audit boolean default true /* 是否需要审核投稿 */
);

/* 
    评论
    评论审核(是否审核评论)
 */

create table if not exists comment (
    comment_id bigint primary key,
    target_type tinyint not null,
    target_id bigint not null,
    target_author_id bigint not null,
    author_id bigint not null,
    content text not null,
    create_date datetime,
    is_reported boolean default false -- 是否被举报
);


create table if not exists sys_message (
    message_id bigint primary key,
    author_id bigint not null,
    message_type tinyint default 0, -- 消息类型，预留
    content varchar(800) not null,
    link char(100) not null,
    is_readed boolean default false,
    create_date datetime default now()
);

create table if not exists conversation (
    conversation_id bigint primary key,
    author1_id bigint not null,
    author2_id bigint not null
);

create table if not exists conversation_message (
    message_id bigint primary key,
    author_id bigint not null,
    receiver_id bigint not null,
    content varchar(500) not null,
    is_readed boolean default false,
    is_deleted tinyint default 3, -- 是否删除,默认是3，有一个人删除就减1，等于1时从数据库删除
    create_date datetime default now()
);


/* relationship */
create table if not exists follow (
    author_id bigint not null,
    target_id bigint not null,
    target_type tinyint not null,
    create_date datetime default now(),
    primary key (author_id, target_id)
);

create table if not exists like_article (
    article_id bigint not null,
    author_id bigint not null,
    create_date datetime default now(),
    primary key (article_id, author_id)
);

create table if not exists subject_manager (
    author_id bigint not null,
    subject_id bigint not null,
    create_date datetime default now(),
    primary key (author_id, subject_id)
);

create table if not exists black_list (
    author_id bigint not null,
    black_id bigint not null,
    create_date datetime default now(),
    primary key (author_id, black_id)
);

create table if not exists contribute (
    article_id bigint not null,
    author_id bigint not null,
    subject_id bigint not null,
    access boolean default false,
    create_date datetime default now(),
    primary key (article_id, author_id)
);

create table if not exists reword (
    author_id bigint not null,
    target_id bigint not null,
    count int not null,
    create_date datetime default now(),
    primary key (author_id, target_id)
);


/* 
  举报表，举报成功后将相应实体的可用字段置为false
  举报记录表: 记录用户被举报次数
  您被举报次数过多，已停止使用
  author\article\comment
 */

create table if not exists illegality_report (
    author_id bigint not null,
    target_id bigint not null,
    target_type tinyint not null,
    description varchar(500) not null,
    create_date datetime default now(),
    handled boolean default false,
    primary key (author_id, target_id)
);


```