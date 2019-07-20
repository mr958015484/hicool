const Mock = require("mockjs")
Mock.mock("/Hicool/data","get",require("./json/data"))

Mock.mock("/Hicool/order","get",require("./json/order"))//订单