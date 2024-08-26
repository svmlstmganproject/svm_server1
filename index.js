const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Schema for 'dax_1day_backtest_ta'
const Dax1DayBacktestTaSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    date: String,
    Var2: Number,
    closedPrice: Number,
    ReturnOfDax: Number,
    directionOfDax: Number,
    CrashIndicatorDax_10__: Number,
    PerformanceCIOfDax_10__Window5: Number,
    ForecastCIOfDax_10__Window5: Number,
    MarketCrashOfDax_10__Window5: Number,
    PerformanceDIOfDax_10__Window5: Number,
    ForecastDIOfDax_10__Window5: Number,
    MarketCrashDIOfDax_10__Window5: Number,
    BackTest_Profit_Window5: Number,
    PerformanceCIOfDax_10__Window10: Number,
    ForecastCIOfDax_10__Window10: Number,
    MarketCrashOfDax_10__Window10: Number,
    PerformanceDIOfDax_10__Window10: Number,
    ForecastDIOfDax_10__Window10: Number,
    MarketCrashDIOfDax_10__Window10: Number,
    BackTest_Profit_Window10: Number,
    PerformanceCIOfDax_10__Window30: Number,
    ForecastCIOfDax_10__Window30: Number,
    MarketCrashOfDax_10__Window30: Number,
    PerformanceDIOfDax_10__Window30: Number
}, { collection: 'dax_1day_backtest_ta' });

const Dax1DayBacktestTaModel = mongoose.model('Dax1DayBacktestTa', Dax1DayBacktestTaSchema);

// Schema for 'svm_u500_1day_piw'
const SvmU5001DayPiwSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    date: String,
    time: String,
    no_: Number,
    closed: Number,
    ReturnOfU500: Number,
    directionOfU500: Number,
    CrashIndicatorU500_1__: Number,
    PerformanceCIOfU500_10__Window5: Number,
    ForecastCIOfU500_10__Window5: Number,
    MarketCrashOfU500_10__Window5: Number,
    PerformanceDIOfU500_10__Window5: Number,
    ForecastDIOfU500_10__Window5: Number,
    MarketCrashDIOfU500_10__Window5: Number,
    BackTest_Profit_Window5: Number,
    PerformanceCIOfU500_10__Window10: Number,
    ForecastCIOfU500_10__Window10: Number,
    MarketCrashOfU500_10__Window10: Number,
    PerformanceDIOfU500_10__Window10: Number,
    ForecastDIOfU500_10__Window10: Number,
    MarketCrashDIOfU500_10__Window10: Number,
    BackTest_Profit_Window10: Number,
    PerformanceCIOfU500_10__Window30: Number,
    ForecastCIOfU500_10__Window30: Number,
    MarketCrashOfU500_10__Window30: Number
}, { collection: 'svm_u500_1day_piw' });

const SvmU5001DayPiwModel = mongoose.model('SvmU5001DayPiw', SvmU5001DayPiwSchema);

// Schema for 'u30_1day_backtest_pee'
const U30_1DayBacktestPeeSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    date: String,
    time: String,
    no_: Number,
    closed: Number,
    ReturnOfU30: Number,
    directionOfU30: Number,
    CrashIndicatorU30_1__: Number,
    PerformanceCIOfU30_10__Window5: Number,
    ForecastCIOfU30_10__Window5: Number,
    MarketCrashOfU30_10__Window5: Number,
    PerformanceDIOfU30_10__Window5: Number,
    ForecastDIOfU30_10__Window5: Number,
    MarketCrashDIOfU30_10__Window5: Number,
    BackTest_Profit_Window5: Number,
    PerformanceCIOfU30_10__Window10: Number,
    ForecastCIOfU30_10__Window10: Number,
    MarketCrashOfU30_10__Window10: Number,
    PerformanceDIOfU30_10__Window10: Number,
    ForecastDIOfU30_10__Window10: Number,
    MarketCrashDIOfU30_10__Window10: Number,
    BackTest_Profit_Window10: Number,
    PerformanceCIOfU30_10__Window30: Number,
    ForecastCIOfU30_10__Window30: Number,
    MarketCrashOfU30_10__Window30: Number,
    PerformanceDIOfU30_10__Window30: Number
}, { collection: 'u30_1day_backtest_pee' });

const U30_1DayBacktestPeeModel = mongoose.model('U30_1DayBacktestPee', U30_1DayBacktestPeeSchema);

// Schema for 'hit_ratio_piw'
const HitRatioPiwSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    HitRatioCIOf10WindowChina: Number,
    HitRatioDIOf10WindowChina: Number,
    HitRatioCIOf30WindowChina: Number,
    HitRatioDIOf30WindowChina: Number
}, { collection: 'hit_ratio_piw' });

const HitRatioPiwModel = mongoose.model('HitRatioPiw', HitRatioPiwSchema);

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection URI
const uri = 'mongodb+srv://svmlstmganproject:G80qmnC3nOo0GnIX@cluster0.pupsn.mongodb.net/SVM?retryWrites=true&w=majority';
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
   .then(() => console.log('Connection to MongoDB is successful!'))
   .catch(err => console.error('MongoDB connection error:', err));

// Endpoint to get data from 'dax_1day_backtest_ta' collection
app.get('/getDax1DayBacktestTaData', (req, res) => {
   console.log('Received request for /getDax1DayBacktestTaData');
   Dax1DayBacktestTaModel.find()
      .then(data => {
         if (data.length === 0) {
            console.log('No data found in the collection');
         } else {
            console.log('Data fetched from MongoDB:', data);
         }
         res.json(data);
      })
      .catch(err => {
         console.error('Error fetching data:', err);
         res.status(500).json(err);
      });
});

// Endpoint to get data from 'svm_u500_1day_piw' collection
app.get('/getSvmU5001DayPiwData', (req, res) => {
   console.log('Received request for /getSvmU5001DayPiwData');
   SvmU5001DayPiwModel.find()
      .then(data => {
         if (data.length === 0) {
            console.log('No data found in the collection');
         } else {
            console.log('Data fetched from MongoDB:', data);
         }
         res.json(data);
      })
      .catch(err => {
         console.error('Error fetching data:', err);
         res.status(500).json(err);
      });
});

// Endpoint to get data from 'u30_1day_backtest_pee' collection
app.get('/getU30_1DayBacktestPeeData', (req, res) => {
   console.log('Received request for /getU30_1DayBacktestPeeData');
   U30_1DayBacktestPeeModel.find()
      .then(data => {
         if (data.length === 0) {
            console.log('No data found in the collection');
         } else {
            console.log('Data fetched from MongoDB:', data);
         }
         res.json(data);
      })
      .catch(err => {
         console.error('Error fetching data:', err);
         res.status(500).json(err);
      });
});

// Endpoint to get data from 'hit_ratio_piw' collection
app.get('/getHitRatioPiwData', (req, res) => {
   console.log('Received request for /getHitRatioPiwData');
   HitRatioPiwModel.find()
      .then(data => {
         if (data.length === 0) {
            console.log('No data found in the collection');
         } else {
            console.log('Data fetched from MongoDB:', data);
         }
         res.json(data);
      })
      .catch(err => {
         console.error('Error fetching data:', err);
         res.status(500).json(err);
      });
});

// Start the server on port 3011
app.listen(3000, () => {
   console.log("Server is running on port 3000");
});
