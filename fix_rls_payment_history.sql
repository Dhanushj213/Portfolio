-- Enable Row Level Security (RLS) on the table
ALTER TABLE public.payment_history ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows users to see only their own payments
-- This assumes there is a 'user_id' column that matches auth.uid()
-- If the column is named differently (e.g., 'profile_id'), change 'user_id' below.
CREATE POLICY "Users can view own payment history"
ON public.payment_history
FOR SELECT
USING (auth.uid() = user_id);

-- Optional: If users should also be able to insert their own records
-- CREATE POLICY "Users can insert own payment history"
-- ON public.payment_history
-- FOR INSERT
-- WITH CHECK (auth.uid() = user_id);
