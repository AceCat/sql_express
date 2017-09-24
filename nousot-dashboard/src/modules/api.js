var axios = require('axios');

module.exports = {
	makeAPICall: function(queryString) {
		const URI = window.encodeURI('http://localhost:3000/' + queryString)
		return axios.get(URI)
		.then(function (response) {
			console.log(response.data.data)
			return response.data.data
		})
	},

	grabStaticActualJSON: function(){
	return {
		data: [{
		  real_estate_date: "2000-03-31",
		  rental_rate: 642.3720991441
		  },
		{
		real_estate_date: "2000-04-30",
		rental_rate: 643.5300459933
		},
		{
		real_estate_date: "2000-05-31",
		rental_rate: 637.1679543298
		},
		{
		real_estate_date: "2000-06-30",
		rental_rate: 642.1967844373
		},
		{
		real_estate_date: "2000-07-31",
		rental_rate: 637.6499721146
		},
		{
		real_estate_date: "2000-08-31",
		rental_rate: 661.7540790224
		},
		{
		real_estate_date: "2000-09-30",
		rental_rate: 651.2793779987
		},
		{
		real_estate_date: "2000-10-31",
		rental_rate: 659.0200640922
		},
		{
		real_estate_date: "2000-11-30",
		rental_rate: 639.1212477134
		},
		{
		real_estate_date: "2000-12-31",
		rental_rate: 653.9384959953
		},
		{
		real_estate_date: "2001-01-31",
		rental_rate: 666.8703258572
		},
		{
		real_estate_date: "2001-02-28",
		rental_rate: 646.7451849657
		},
		{
		real_estate_date: "2001-03-31",
		rental_rate: 671.0412185391
		},
		{
		real_estate_date: "2001-04-30",
		rental_rate: 669.6034370606
		},
		{
		real_estate_date: "2001-05-31",
		rental_rate: 662.2115169596
		},
		{
		real_estate_date: "2001-06-30",
		rental_rate: 666.6432019116
		},
		{
		real_estate_date: "2001-07-31",
		rental_rate: 669.442287072
		},
		{
		real_estate_date: "2001-08-31",
		rental_rate: 689.9754131001
		},
		{
		real_estate_date: "2001-09-30",
		rental_rate: 679.3599864158
		},
		{
		real_estate_date: "2001-10-31",
		rental_rate: 660.1971598645
		},
		{
		real_estate_date: "2001-11-30",
		rental_rate: 679.6552859521
		},
		{
		real_estate_date: "2001-12-31",
		rental_rate: 661.6816674653
		},
		{
		real_estate_date: "2002-01-31",
		rental_rate: 672.5395241543
		},
		{
		real_estate_date: "2002-02-28",
		rental_rate: 681.9706212777
		},
		{
		real_estate_date: "2002-03-31",
		rental_rate: 684.2187619078
		},
		{
		real_estate_date: "2002-04-30",
		rental_rate: 693.9451549587
		},
		{
		real_estate_date: "2002-05-31",
		rental_rate: 669.3433999746
		},
		{
		real_estate_date: "2002-06-30",
		rental_rate: 691.773797991
		},
		{
		real_estate_date: "2002-07-31",
		rental_rate: 690.4505929578
		},
		{
		real_estate_date: "2002-08-31",
		rental_rate: 673.9943868281
		},
		{
		real_estate_date: "2002-09-30",
		rental_rate: 694.1002204894
		},
		{
		real_estate_date: "2002-10-31",
		rental_rate: 682.8976582424
		},
		{
		real_estate_date: "2002-11-30",
		rental_rate: 665.447977015
		},
		{
		real_estate_date: "2002-12-31",
		rental_rate: 679.1910774619
		},
		{
		real_estate_date: "2003-01-31",
		rental_rate: 673.1275902779
		},
		{
		real_estate_date: "2003-02-28",
		rental_rate: 669.7393692082
		},
		{
		real_estate_date: "2003-03-31",
		rental_rate: 668.0894706022
		},
		{
		real_estate_date: "2003-04-30",
		rental_rate: 676.5662724846
		},
		{
		real_estate_date: "2003-05-31",
		rental_rate: 686.8922816604
		},
		{
		real_estate_date: "2003-06-30",
		rental_rate: 666.9476066688
		},
		{
		real_estate_date: "2003-07-31",
		rental_rate: 688.9669433088
		},
		{
		real_estate_date: "2003-08-31",
		rental_rate: 659.0554610504
		},
		{
		real_estate_date: "2003-09-30",
		rental_rate: 667.7205037098
		},
		{
		real_estate_date: "2003-10-31",
		rental_rate: 669.8209547149
		},
		{
		real_estate_date: "2003-11-30",
		rental_rate: 683.4119029087
		},
		{
		real_estate_date: "2003-12-31",
		rental_rate: 676.3906031148
		},
		{
		real_estate_date: "2004-01-31",
		rental_rate: 656.4781699965
		},
		{
		real_estate_date: "2004-02-29",
		rental_rate: 683.6822952291
		},
		{
		real_estate_date: "2004-03-31",
		rental_rate: 683.5415780962
		},
		{
		real_estate_date: "2004-04-30",
		rental_rate: 662.8047924791
		},
		{
		real_estate_date: "2004-05-31",
		rental_rate: 678.9513767881
		},
		{
		real_estate_date: "2004-06-30",
		rental_rate: 683.5541178057
		},
		{
		real_estate_date: "2004-07-31",
		rental_rate: 656.378060513
		},
		{
		real_estate_date: "2004-08-31",
		rental_rate: 657.7686316452
		},
		{
		real_estate_date: "2004-09-30",
		rental_rate: 679.3188800439
		},
		{
		real_estate_date: "2004-10-31",
		rental_rate: 672.1291899553
		},
		{
		real_estate_date: "2004-11-30",
		rental_rate: 661.6273904515
		},
		{
		real_estate_date: "2004-12-31",
		rental_rate: 676.6502412957
		},
		{
		real_estate_date: "2005-01-31",
		rental_rate: 665.2529123017
		},
		{
		real_estate_date: "2005-02-28",
		rental_rate: 691.2175137602
		},
		{
		real_estate_date: "2005-03-31",
		rental_rate: 674.1348596545
		},
		{
		real_estate_date: "2005-04-30",
		rental_rate: 675.6737253917
		},
		{
		real_estate_date: "2005-05-31",
		rental_rate: 685.8512199254
		},
		{
		real_estate_date: "2005-06-30",
		rental_rate: 679.8329295023
		},
		{
		real_estate_date: "2005-07-31",
		rental_rate: 677.8868241194
		},
		{
		real_estate_date: "2005-08-31",
		rental_rate: 682.6959840705
		},
		{
		real_estate_date: "2005-09-30",
		rental_rate: 677.5536146895
		},
		{
		real_estate_date: "2005-10-31",
		rental_rate: 677.3816154831
		},
		{
		real_estate_date: "2005-11-30",
		rental_rate: 675.9910441377
		},
		{
		real_estate_date: "2005-12-31",
		rental_rate: 689.2532411736
		},
		{
		real_estate_date: "2006-01-31",
		rental_rate: 706.9018786961
		},
		{
		real_estate_date: "2006-02-28",
		rental_rate: 706.2575731675
		},
		{
		real_estate_date: "2006-03-31",
		rental_rate: 691.2997357682
		},
		{
		real_estate_date: "2006-04-30",
		rental_rate: 708.4045251004
		},
		{
		real_estate_date: "2006-05-31",
		rental_rate: 693.5773473835
		},
		{
		real_estate_date: "2006-06-30",
		rental_rate: 724.517559859
		},
		{
		real_estate_date: "2006-07-31",
		rental_rate: 726.4970284865
		},
		{
		real_estate_date: "2006-08-31",
		rental_rate: 705.5012587239
		},
		{
		real_estate_date: "2006-09-30",
		rental_rate: 718.1656912364
		},
		{
		real_estate_date: "2006-10-31",
		rental_rate: 713.8645861412
		},
		{
		real_estate_date: "2006-11-30",
		rental_rate: 706.7429554466
		},
		{
		real_estate_date: "2006-12-31",
		rental_rate: 738.4288710859
		},
		{
		real_estate_date: "2007-01-31",
		rental_rate: 734.6933974088
		},
		{
		real_estate_date: "2007-02-28",
		rental_rate: 738.7266132391
		},
		{
		real_estate_date: "2007-03-31",
		rental_rate: 730.0504703854
		},
		{
		real_estate_date: "2007-04-30",
		rental_rate: 747.1511247652
		},
		{
		real_estate_date: "2007-05-31",
		rental_rate: 742.87090837
		},
		{
		real_estate_date: "2007-06-30",
		rental_rate: 723.8841202729
		},
		{
		real_estate_date: "2007-07-31",
		rental_rate: 726.079806442
		},
		{
		real_estate_date: "2007-08-31",
		rental_rate: 750.2473068094
		},
		{
		real_estate_date: "2007-09-30",
		rental_rate: 753.2425851546
		},
		{
		real_estate_date: "2007-10-31",
		rental_rate: 730.8342502563
		},
		{
		real_estate_date: "2007-11-30",
		rental_rate: 743.4718192593
		},
		{
		real_estate_date: "2007-12-31",
		rental_rate: 750.2636076375
		},
		{
		real_estate_date: "2008-01-31",
		rental_rate: 729.5270983258
		},
		{
		real_estate_date: "2008-02-29",
		rental_rate: 758.4673915279
		},
		{
		real_estate_date: "2008-03-31",
		rental_rate: 749.9920671173
		},
		{
		real_estate_date: "2008-04-30",
		rental_rate: 730.957164643
		},
		{
		real_estate_date: "2008-05-31",
		rental_rate: 742.5866907074
		},
		{
		real_estate_date: "2008-06-30",
		rental_rate: 739.6554400132
		},
		{
		real_estate_date: "2008-07-31",
		rental_rate: 761.6107389957
		},
		{
		real_estate_date: "2008-08-31",
		rental_rate: 736.7594887562
		},
		{
		real_estate_date: "2008-09-30",
		rental_rate: 756.0235719859
		},
		{
		real_estate_date: "2008-10-31",
		rental_rate: 729.1846558319
		},
		{
		real_estate_date: "2008-11-30",
		rental_rate: 725.9704811325
		},
		{
		real_estate_date: "2008-12-31",
		rental_rate: 748.8913897733
		},
		{
		real_estate_date: "2009-01-31",
		rental_rate: 739.2176649714
		},
		{
		real_estate_date: "2009-02-28",
		rental_rate: 732.5085982864
		},
		{
		real_estate_date: "2009-03-31",
		rental_rate: 711.7770990132
		},
		{
		real_estate_date: "2009-04-30",
		rental_rate: 720.2960821266
		},
		{
		real_estate_date: "2009-05-31",
		rental_rate: 705.1480429384
		},
		{
		real_estate_date: "2009-06-30",
		rental_rate: 704.1971032193
		},
		{
		real_estate_date: "2009-07-31",
		rental_rate: 705.4805425274
		},
		{
		real_estate_date: "2009-08-31",
		rental_rate: 694.0873155228
		},
		{
		real_estate_date: "2009-09-30",
		rental_rate: 700.9627297659
		},
		{
		real_estate_date: "2009-10-31",
		rental_rate: 697.6918597537
		},
		{
		real_estate_date: "2009-11-30",
		rental_rate: 690.4188610687
		},
		{
		real_estate_date: "2009-12-31",
		rental_rate: 658.8750114571
		},
		{
		real_estate_date: "2010-01-31",
		rental_rate: 676.1442247789
		},
		{
		real_estate_date: "2010-02-28",
		rental_rate: 668.9723006735
		},
		{
		real_estate_date: "2010-03-31",
		rental_rate: 675.0347523666
		},
		{
		real_estate_date: "2010-04-30",
		rental_rate: 682.7402692039
		},
		{
		real_estate_date: "2010-05-31",
		rental_rate: 701.2701151183
		},
		{
		real_estate_date: "2010-06-30",
		rental_rate: 676.971318842
		},
		{
		real_estate_date: "2010-07-31",
		rental_rate: 691.654444191
		},
		{
		real_estate_date: "2010-08-31",
		rental_rate: 674.9237908086
		},
		{
		real_estate_date: "2010-09-30",
		rental_rate: 706.3831680056
		},
		{
		real_estate_date: "2010-10-31",
		rental_rate: 674.7165079117
		},
		{
		real_estate_date: "2010-11-30",
		rental_rate: 690.446567225
		},
		{
		real_estate_date: "2010-12-31",
		rental_rate: 691.8019736671
		},
		{
		real_estate_date: "2011-01-31",
		rental_rate: 701.5393941191
		},
		{
		real_estate_date: "2011-02-28",
		rental_rate: 687.5739931275
		},
		{
		real_estate_date: "2011-03-31",
		rental_rate: 678.6128905788
		},
		{
		real_estate_date: "2011-04-30",
		rental_rate: 679.1358358203
		},
		{
		real_estate_date: "2011-05-31",
		rental_rate: 676.3281491887
		},
		{
		real_estate_date: "2011-06-30",
		rental_rate: 681.6521407253
		},
		{
		real_estate_date: "2011-07-31",
		rental_rate: 703.4973529817
		},
		{
		real_estate_date: "2011-08-31",
		rental_rate: 681.6177221305
		},
		{
		real_estate_date: "2011-09-30",
		rental_rate: 678.6875885118
		},
		{
		real_estate_date: "2011-10-31",
		rental_rate: 676.9819838511
		},
		{
		real_estate_date: "2011-11-30",
		rental_rate: 679.4569150907
		},
		{
		real_estate_date: "2011-12-31",
		rental_rate: 686.0564008969
		},
		{
		real_estate_date: "2012-01-31",
		rental_rate: 705.0585578851
		},
		{
		real_estate_date: "2012-02-29",
		rental_rate: 680.0522161143
		},
		{
		real_estate_date: "2012-03-31",
		rental_rate: 685.6651547394
		},
		{
		real_estate_date: "2012-04-30",
		rental_rate: 713.4785130646
		},
		{
		real_estate_date: "2012-05-31",
		rental_rate: 705.857529814
		},
		{
		real_estate_date: "2012-06-30",
		rental_rate: 702.4118183019
		},
		{
		real_estate_date: "2012-07-31",
		rental_rate: 695.9178297669
		},
		{
		real_estate_date: "2012-08-31",
		rental_rate: 707.754357553
		},
		{
		real_estate_date: "2012-09-30",
		rental_rate: 716.9942242279
		},
		{
		real_estate_date: "2012-10-31",
		rental_rate: 697.8400946504
		},
		{
		real_estate_date: "2012-11-30",
		rental_rate: 712.5509104386
		},
		{
		real_estate_date: "2012-12-31",
		rental_rate: 694.5313773749
		},
		{
		real_estate_date: "2013-01-31",
		rental_rate: 716.178780202
		},
		{
		real_estate_date: "2013-02-28",
		rental_rate: 707.0381794261
		},
		{
		real_estate_date: "2013-03-31",
		rental_rate: 703.2843436311
		},
		{
		real_estate_date: "2013-04-30",
		rental_rate: 714.1340818478
		},
		{
		real_estate_date: "2013-05-31",
		rental_rate: 734.5147953605
		},
		{
		real_estate_date: "2013-06-30",
		rental_rate: 712.8304621902
		},
		{
		real_estate_date: "2013-07-31",
		rental_rate: 739.5249043036
		},
		{
		real_estate_date: "2013-08-31",
		rental_rate: 744.0435733874
		},
		{
		real_estate_date: "2013-09-30",
		rental_rate: 726.1899957207
		},
		{
		real_estate_date: "2013-10-31",
		rental_rate: 737.7425888069
		},
		{
		real_estate_date: "2013-11-30",
		rental_rate: 736.0780580048
		},
		{
		real_estate_date: "2013-12-31",
		rental_rate: 760.7621732247
		},
		{
		real_estate_date: "2014-01-31",
		rental_rate: 755.135786161
		},
		{
		real_estate_date: "2014-02-28",
		rental_rate: 768.9371344435
		},
		{
		real_estate_date: "2014-03-31",
		rental_rate: 747.2603744874
		},
		{
		real_estate_date: "2014-04-30",
		rental_rate: 744.024804337
		},
		{
		real_estate_date: "2014-05-31",
		rental_rate: 750.5499322639
		},
		{
		real_estate_date: "2014-06-30",
		rental_rate: 765.0263785521
		},
		{
		real_estate_date: "2014-07-31",
		rental_rate: 747.8941170891
		},
		{
		real_estate_date: "2014-08-31",
		rental_rate: 776.6143409763
		},
		{
		real_estate_date: "2014-09-30",
		rental_rate: 757.6158653599
		},
		{
		real_estate_date: "2014-10-31",
		rental_rate: 752.7340245193
		},
		{
		real_estate_date: "2014-11-30",
		rental_rate: 789.2911164508
		},
		{
		real_estate_date: "2014-12-31",
		rental_rate: 791.6649523413
		},
		{
		real_estate_date: "2015-01-31",
		rental_rate: 785.592681023
		},
		{
		real_estate_date: "2015-02-28",
		rental_rate: 784.0675577671
		},
		{
		real_estate_date: "2015-03-31",
		rental_rate: 777.9059247227
		},
		{
		real_estate_date: "2015-04-30",
		rental_rate: 797.7188551243
		},
		{
		real_estate_date: "2015-05-31",
		rental_rate: 802.2987754358
		},
		{
		real_estate_date: "2015-06-30",
		rental_rate: 798.802555602
		},
		{
		real_estate_date: "2015-07-31",
		rental_rate: 797.3257894361
		},
		{
		real_estate_date: "2015-08-31",
		rental_rate: 799.1596100674
		},
		{
		real_estate_date: "2015-09-30",
		rental_rate: 832.9904315257
		},
		{
		real_estate_date: "2015-10-31",
		rental_rate: 834.9303138334
		},
		{
		real_estate_date: "2015-11-30",
		rental_rate: 821.9777287951
		},
		{
		real_estate_date: "2015-12-31",
		rental_rate: 839.5675659242
		},
		{
		real_estate_date: "2016-01-31",
		rental_rate: 849.7877409941
		},
		{
		real_estate_date: "2016-02-29",
		rental_rate: 854.1033006174
		}
		]}
	}
};