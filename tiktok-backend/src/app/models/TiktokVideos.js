const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
var mongooseDelete = require('mongoose-delete');

const tiktokSchema = new Schema(
    {
        url: {type: String},
        channel: {type: String},
        description: {type: String},
        song: {type: String},
        likes: {type: String},
        shares: {type: String},
        messages: {type: String},
        slug: { type: String, slug: 'name', unique: true },
        // createdAt: { type: t: Date.now }, //lưu thời gian bản ghi được tạo
        // updatedAt: { type: Date, default: Date.now }, //lưu thời gian bản ghi được cập nhật
    },
    {
        timestamps: true,
    },
);
//Add plugins
mongoose.plugin(slug);
Course.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all',
});

module.exports = mongoose.model('TiktokVideos', tiktokSchema);
