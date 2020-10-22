import React from "react";
import { ShowMoreText } from "./ShowMore";

export default {
  title: "ATOMS | Text / ShowMoreText",
  component: ShowMoreText
};

const text =`حتما این چند وقته اسم وبینار، سمینار آنلاین، سمینار مجازی یا حتی ایسمینار رو خیلی شنیده باشین، خوب قراره ما تو این مقاله خیلی ساده و خودمونی بگیم وبینار چیست ؟ (چون توی ایسمینار هزاران دقیقه وبینار برای خودمون و مشتریانمون برگزار کردیم مطمئنا می تونیم تعریف درستی از وبینار بهتون ارائه بدیم)
وبینار چیست ؟
وبینار (Webinar) از عبارت Web-based seminar گرفته شده و به کلاس، دوره، سمینار یا هر رویداد آنلاینی گفته میشه که تو محیط وب و با استفاده از اینترنت بصورت کاملا آنلاین، زنده، تعاملی و دو طرفه تو یک زمان مشخص برگزار میشه.
به بیان ساده تر تو یه روز و ساعت از پیش مشخص شده مدرس و کاربران در محیط وبینار آنلاین میشن و مدرس صدا و تصویر، فایل ارائه، وایت برد، ویدئو کلیپ آموزشی و یا دسکتاپش رو به اشتراک می زاره و کاربران هم به ارائه مدرس گوش میدن و هر جا که نیاز بود از طریق چت باکس یا حتی صدا و تصویر می تونن نظر بدن یا سوالشون رو مطرح کنن.`;

export const MoreText = () => {
    return (
        <ShowMoreText text={text} />
    );
  };
  