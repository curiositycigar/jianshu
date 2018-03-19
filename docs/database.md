```sql
/*
    id: bigint
    name: char(30)
    title: char (50)
    描述: vachar(300)
    邮箱、链接: char(100)
*/
create table source (
    source_id bigint primary key,
    source_url char(100) not null,
    source_type tinyint not null
)

create table author (
    author_id bigint primary key, /* 主键 作者id */
    avator_id char(30),
    nick_name char(30),
    sex tinyint(1) default 0, /* unknow male female */
    introduction vachar(300),
    website char(100),
    er_code bigint, /* image id */
    createtime datetime,
    reword_open bool,
    rewoed_description vachar(300)
)

create table author_setting (
    author_id bigint primary key, /*  主键 + 外键 */
    password char(20) not null,
    phone char(11),
    email char(100),
    editer_type tinyint(1) default 1, /* 1.markdown 2.富文本、等等 */
    mail_recive boolean default false,
    is_disabled boolean default false,
    balance int default 10 /* 积分 */
)

create table article (
    article_id bigint primary key,
    title char(50) not null,
    author_id bigint, /* 外键 */
    word_counts int default 0, /* 字数 */
    reads int default 0, /* 阅读次数 */
    likes int default 0,
    content text not null,
    is_publish boolean default false,
    article_group_id bigint not null,
    createtime datetime default now(),
    lastmodify datetime default now(),
    /**/
    comment_date datetime,
    comment_id bigint,
    is_reported boolean default false, // 是否被举报
    is_revoke boolean default false, // 是否被撤回
    should_be_audit boolean default false // 是否需要被审核
)

create table article_group (
    article_group_id bigint primary key,
    name char(50) not null,
    author_id bigint not null,
    cover bigint, // 封面图片id
    description vachar(300),
    article_count int default 0,
    follow_count int default 0,
    create_date datetime default now(),
    is_publish boolean default true
)

create table subject (
    subject_id bigint primary key,
    name char(50) not null,
    author_id bigint not null,
    cover bigint, // 封面图片id
    description vachar(300),
    article_count int default 0,
    follow_count int default 0,
    create_date datetime default now(),
    allow_contribute boolean default true,
    should_audit boolean default true, // 是否需要审核投稿
)

create table comment (
    comment_id bigint primary key,
    target_type tinyint not null,
    target_id bigint not null,
    author_id bigint not null,
    content text not null,
    create_date datetime,
    is_reported boolean default false // 是否被举报
)

create table sys_message (
    message_id bigint primary key,
    author_id bigint not null,
    message_type tiny int default 0, // 消息类型，预留
    content varchar(800) not null,
    link char(100) not null,
    is_readed boolean default false,
    create_date datetime default now()
)
create table conversation (
    author_id bigint primary key,
    receiver_id bigint not null,
    total int default 1,
    unread_count int default 0,
    last_message_id bigint not null,
    create_date datetime default now()
)
create table letter_message (
    message_id bigint primary key,
    author_id bigint not null,
    receiver_id bigint not null,
    content varchar(500) not null,
    is_readed boolean default false,
    is_deleted tinyint default 3, // 是否删除,默认是3，有一个人删除就减1，等于1时从数据库删除
    create_date datetime default now()
)


/* relationship */
create table follow (
    author_id bigint not null,
    target_type tinyint not null,
    target_id bigint not null,
    create_date datetime default now()
)
create table like_article (
    article_id bigint not null,
    author_id bigint not null,
    create_date datetime default now()
)
create table subject_manager (
    author_id bigint not null,
    subject_id bigint not null,
    create_date datetime default now()
)
create table black_list (
    author_id bigint not null,
    black_id bigint not null,
    create_date datetime default now()
)
create table contribute (
    article_id bigint not null,
    author_id bigint not null,
    subject_id bigint not null,
    status boolean default false,
    create_date datetime default now()
)
create table reword (
    author_id bigint not null,
    target_id bigint not null,
    count int not null,
    is_readed boolean default false,
    create_date datetime default now()
)
create table illegality_report (
    author_id bigint not null,
    target_type tinyint not null,
    target_id bigint not null,
    information text not null,,
    create_date datetime default now()
)


```