CREATE UNIQUE INDEX IF NOT EXISTS automation_dates_reservations_date_id_key
  ON public.automation_dates_reservations (date_id);

CREATE UNIQUE INDEX IF NOT EXISTS automation_dates_reservations_user_id_key
  ON public.automation_dates_reservations (user_id);

DROP POLICY IF EXISTS "Enable delete for users based on user_id"
  ON public.automation_dates_reservations;

CREATE POLICY "Enable delete for users based on user_id"
  ON public.automation_dates_reservations
  FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Enable insert for authenticated users only"
  ON public.automation_dates_reservations;

CREATE POLICY "Enable insert for authenticated users only"
  ON public.automation_dates_reservations
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);
