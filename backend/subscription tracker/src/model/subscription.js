const mongoose = require('mongoose');

const subsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Subscription name is required"],
    trim: true,
    minLength: 2,
  },
  price: {
    type: Number,
    required: [true, "Price is required"],
    min: [0, "Price must be greater than 0"],
  },
  currency: {
    type: String,
    enum: ['USD', 'EUR', 'GBP'],
    default: 'USD',
  },
  frequency: {
    type: String,
    enum: ['daily', 'weekly', 'monthly', 'yearly'],
  },
  category: {
    type: String, // ✅ missing type added
    enum: ['sports', 'news', 'entertainment', 'technology', 'other'],
    // required: true, // Uncomment if needed
  },
  payment_method: {
    type: String,
    required: true,
    trim: true,
  },
  status: {
    type: String,
    enum: ['active', 'cancelled', 'expired'],
    default: 'active',
  },
  startDate: {
    type: Date,
    required: true,
    validate: {
      validator: (value) => value <= new Date(),
      message: "Start date must be in the past",
    },
  },
  renewalDate: {
    type: Date,
    validate: {
      validator: function (value) {
        return value > this.startDate;
      },
      message: "Renewal date must be after the start date",
    },
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
    index: true,
  }
}, { timestamps: true });

// Auto-calculate renewalDate if not provided
subsSchema.pre('save', function (next) {
  if (!this.renewalDate && this.frequency) {
    const renewalPeriod = {
      daily: 1,
      weekly: 7, // ✅ fixed typo
      monthly: 30,
      yearly: 365,
    };

    const period = renewalPeriod[this.frequency];
    if (period) {
      this.renewalDate = new Date(this.startDate);
      this.renewalDate.setDate(this.renewalDate.getDate() + period);
    }
  }

  // Auto-expire if the renewal date is in the past
  if (this.renewalDate < new Date()) {
    this.status = 'expired';
  }

  next();
});

const Subscription = mongoose.model('subs', subsSchema);

module.exports = Subscription;
