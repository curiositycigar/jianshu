```sql
/*
    id: bigint
    name: char(30)
    title: char (50)
    描述: vachar(300)
    邮箱、链接 char(100)
*/
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
    disabled boolean default false,
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
    publish boolean default false,
    article_group_id bigint not null,
    createtime datetime default now(),
    lastmodify datetime default now(),
    /**/
    comment_date datetime,
    comment_id bigint,
    
)

```